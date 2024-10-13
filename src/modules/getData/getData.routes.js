const { Router } = require("express");
const router = Router();
const getDataController = require("./getData.controller");

router.get("/",getDataController.getAllImagesName);

module.exports = router;
