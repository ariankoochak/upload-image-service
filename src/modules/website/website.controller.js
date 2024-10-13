const path = require('path')

class WebsiteController{
    mainWebsite(req,res,next){
        try {
            const starterFilePath = path.join(process.cwd(),'storage','frontend','index.html')
            res.status(200);
            res.sendFile(starterFilePath)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new WebsiteController;