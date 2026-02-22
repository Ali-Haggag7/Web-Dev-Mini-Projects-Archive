const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
app.set('view engine', 'ejs')
app.use(express.static('public'))

/*------------------------- automatic refresh ------------------------*/
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
/*------------------------- automatic refresh ------------------------*/

mongoose.connect("mongodb://127.0.0.1:27017/node-project").then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
})
    .catch((err) => {
        console.log(err);
    });


// get request
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/user/add.html', (req, res) => {
    res.render('user/add.ejs')
})

app.get('/user/view.html', (req, res) => {
    res.render('user/view.ejs')
})

app.get('/user/edit.html', (req, res) => {
    res.render('user/edit.ejs')
})
