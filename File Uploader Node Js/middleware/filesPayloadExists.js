const filesPayloadExists = (req,res,next)=>{

    if(!req.files) return res.status(400).json({status:"error" , msg:"missing  files"})
        next()
}
module.exports = filesPayloadExists