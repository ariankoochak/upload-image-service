const { Router } = require("express");
const router = Router();
const {uploadFile} = require('../../config/multer.config')

router.post("/", uploadFile.single("image"));

module.exports = router;