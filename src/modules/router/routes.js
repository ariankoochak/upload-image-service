const { Router } = require("express");
const router = Router();

const uploadRouter = require('../upload/upload.routes')
const getDataRouter = require('../getData/getData.routes')
const websiteRouter = require('../website/website.route')

router.use("/", websiteRouter);
router.use("/upload", uploadRouter);
router.use("/get-data",getDataRouter );

module.exports = router;