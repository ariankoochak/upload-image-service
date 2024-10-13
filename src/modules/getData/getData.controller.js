class getDataController{
    getAllImagesName(req,res,next){
        try {
            res.send('hameye aksa')
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new getDataController;