const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/storage");
    },
    filename: async (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const whiteListFormat = [".png", ".jpg", ".jpeg", ".webp"];
        if (whiteListFormat.includes(ext.toLowerCase())) {
            const fileName = Date.now() + ext;
            req.res.locals.fileName = fileName;
            cb(null, fileName);
        } else {
            cb(new Error("wrong file!"));
        }
    },
});

const uploadFile = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 * 10, //10MB
    },
});

module.exports = { uploadFile };
