const path = require('path')

class WebsiteController{
    mainWebsite(req,res,next){
        try {
            res.status(200);
            res.sendFile(path.join(__dirname,'html','index.html'))
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new WebsiteController;