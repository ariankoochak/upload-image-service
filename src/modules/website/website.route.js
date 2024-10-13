const { Router } = require("express");
const websiteController = require("./website.controller");
const router = Router();

router.get("/",websiteController.mainWebsite );

module.exports = router;
