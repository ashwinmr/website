const path = require('path')
const express = require('express')


const app = express()

// Allow public directory to be used by website
app.use(express.static(path.join(__dirname, 'public')));

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
app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Blog',
        blog_post: {
            title: "Example Title",
            description: "Example description",
            date: "01/01/2020",
            author: "example author",
            content: "Example content",
        }
    })
})
app.get('/form', (req, res) => {
    res.render('form', { title: 'Form' })
})

// Start server
app.listen(3000, () => {
    console.log('Server is up on 3000')
})