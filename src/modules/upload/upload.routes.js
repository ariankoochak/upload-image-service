const { Router } = require("express");
const router = Router();

router.post("/", ()=>{
    console.log('hello');
});

module.exports = router;