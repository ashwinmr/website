const path = require('path')
const express = require('express')


const app = express()

// Allow public to be used by website
app.use(express.static(path.join(__dirname, 'public')));

// Set views folder
app.set('views', path.join(__dirname, 'views'))

// Set view engine
app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
// })

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})