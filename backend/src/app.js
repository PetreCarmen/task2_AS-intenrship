const express = require('express');
const routes = require('./router');
const cors = require("cors");
module.exports = startApplication;

function startApplication(sequelize) {
    const app = express();
    const port = 3001;

    app.use(cors({origin: "*"}));

    routes.configureRoutes(app, sequelize);

    app.listen(port, () => {
        console.log('Backend server listening on port" ${port}');
    });

    app.get("/", (req, res) => {
        res.send({ message: "We did it!" });
      });
}


