const path = require('path')

class WebsiteController{
    mainWebsite(req,res,next){
        try {
            res.status(200);
            res.redirect('http://localhost:3000/frontend/index.html')
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new WebsiteController;