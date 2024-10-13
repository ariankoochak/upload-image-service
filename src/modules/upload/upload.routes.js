const { Router } = require("express");
const router = Router();
const {uploadFile} = require('../../config/multer.config');
const uploadController = require("./upload.controller");

router.post("/", uploadFile.single("image"),uploadController.uploadImage);

module.exports = router;