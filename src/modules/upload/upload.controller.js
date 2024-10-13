class UploadController {
    uploadImage(req,res,next){
        try {
            if(req.res.locals.fileName !== undefined){
                res.status(201);
                res.send({
                    message: "image uploaded successfully",
                    imageName: req.res.locals.fileName,
                });
            }else{
                throw {
                    status : 400,
                    message : "image not uploaded!",
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new UploadController;