const fs = require('fs')
const path = require('path')

class getDataController{
    getAllImagesName(req,res,next){
        try {
            const directoryPath = path.join(process.cwd(),'storage', 'upload');
            const files = fs.readdirSync(directoryPath)
            res.send(files)    
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new getDataController;