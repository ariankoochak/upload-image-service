const { Router } = require("express");
const router = Router();

const uploadRouter = require('../upload/upload.routes')

router.use("/upload", uploadRouter);

module.exports = router;