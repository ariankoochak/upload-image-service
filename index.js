const express = require("express");
const app = express();

const PORT = 3000;

const allRoutes = require("./src/modules/router/routes");

app.use(allRoutes);

app.listen(PORT, () => {
    console.log(`Upload Service listening on port ${PORT}`);
});
