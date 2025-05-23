const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtLimiter = require('./middleware/fileExtParameter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');

const PORT = process.env.PORT || 3500
const app = express();


app.get('/', (req,res)=>{

    res.sendFile(path.join(__dirname,"index.html"))
})


app.post('/upload',
    fileUpload({ createParentPath :true}),filesPayloadExists,fileExtLimiter(['.png','.jpg','.jpeg']),fileSizeLimiter,
    (req,res)=>{
        const files = req.files
        console.log(files)

        return res.json({status : 'logged', msg: 'logged'})
    }
)


app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)} )