const express = require("express");
const app = express();

const PORT = 3000;

const allRoutes = require("./src/modules/router/routes");

app.use(express.static("storage"));

app.use(allRoutes);
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: {
            message: err.message || "internal server error",
        },
    });
});

app.listen(PORT, () => {
    console.log(`Upload Service listening on port ${PORT}`);
});
