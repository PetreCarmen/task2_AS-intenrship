const express = require('express');
const routes = require('./router');
const cors = require("cors");
module.exports = startApplication;

function startApplication(sequelize) {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(cors());

    routes.configureRoutes(app, sequelize);

    app.listen(port, () => 
        console.log("Backend server listening on port" + port));

    app.get("/", (req, res) => {
        res.send({ message: "We did it!" });
      });
}
