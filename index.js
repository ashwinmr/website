const path = require('path')
const express = require('express')
const app = express()

// Allow assets to be used by website
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})