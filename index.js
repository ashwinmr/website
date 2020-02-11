const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const blog_post_model = require('./database/models/blog_post');

const app = express()

// Connect to database
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

// Allow public directory to be used by website
app.use(express.static(path.join(__dirname, 'public')));

// Parse requests to obtain request.body
app.use(express.urlencoded()); // to support URL-encoded request bodies
app.use(express.json());       // to support JSON-encoded request bodies

// Set views folder
app.set('views', path.join(__dirname, 'views'))

// Set view engine
app.set('view engine', 'pug')

// Routing
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})
app.get('/gallery', (req, res) => {
    res.render('gallery', { title: 'Gallery' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})
app.get('/blog', async(req, res) => {
    const blog_posts = await blog_post_model.find({})
    res.render('blog', {
        title: 'Blog',
        blog_posts: blog_posts,
    })
})
app.get('/form', (req, res) => {
    res.render('form', { title: 'Form' })
})
app.post('/form/add_blog_post', (req, res) => {
    // req.body requires parsing the request using express
    blog_post_model.create(req.body, (error, post) => {
        res.redirect('/blog')
    })
})

// Start server
app.listen(3000, () => {
    console.log('Server is up on 3000')
})