const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

class UploadController {

    async resizeImage(req,res,next){
        try {
            if (req.res.locals.fileName !== undefined) {
                
                const filePath = path.join(process.cwd(),"storage","upload",req.res.locals.fileName);
                const resultPath = path.join(process.cwd(),"storage","upload",`${Date.now()}.png`);

                await sharp(filePath).resize(500).toFormat("png").toFile(resultPath);

                fs.unlinkSync(filePath);

                next();
            } else {
                throw {
                    status: 400,
                    message: "image not uploaded!",
                };
            }
        } catch (err) {
            next(err)
        }
    }

    uploadImage(req, res, next) {
        try {
            res.status(201);
            res.send({
                message: "image uploaded successfully",
                imageName: req.res.locals.fileName,
            });
        } catch (err) {
            next(err);
        }
    }
    deleteImageByName(req, res, next) {
        try {
            const imageName = req.params.imageName;
            const filePath = path.join(
                process.cwd(),
                "storage",
                "upload",
                imageName
            );
            if (fs.existsSync(filePath) === true) {
                fs.unlinkSync(filePath);
                res.status(200);
                res.send({
                    message: "image deleted successfully",
                });
            }
            else{
                res.status(404);
                res.send({
                    message : "image not found!"
                })
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UploadController();
