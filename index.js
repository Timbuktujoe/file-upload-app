const express = require('express')
const multer = require('multer')
const app = express()
const port = 3000;

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage })

// General Example
app.use('/a', express.static('/b'));

// Above line would serve all files/folders inside of the 'b' directory
// And make them accessible through http://localhost:3000/a.

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));


app.listen(port, () => console.log(`Server running on port ${port}!`))