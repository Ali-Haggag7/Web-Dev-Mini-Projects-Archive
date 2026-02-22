const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1/urlShortener')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))  // POST لقراءة بيانات الفورم من 

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()

    res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
    const fullUrl = req.body.fullUrl

    if (!validator.isURL(fullUrl, { require_protocol: true })) {
        return res.status(400).send('Link is not valid')
    }

    try {
        await ShortUrl.create({ full: fullUrl })
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000)