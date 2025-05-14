const path = require('path')
const fileExtLimiter = (allowedExtArray)=>{
    
    return(req,res,next)=>{
        const files = req.files
        const fileExtensions = []
        Object.keys(files).forEach((key)=>{fileExtensions.push(path.extname(files[key].name))}) 
    
    const allowed = fileExtensions.every(ext=> allowedExtArray.includes(ext))

    if(!allowed){

        res.status(422).json({msg: "files of this kind are not suppoerted"})
    }
    next()
}
}
module.exports = fileExtLimiter