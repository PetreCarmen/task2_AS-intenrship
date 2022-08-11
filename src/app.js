const express = require('express');
const routes = require('./router');

module.exports = startApplication;

function startApplication() {
    const app = express();
    const port = 3000;


    routes.configureRoutes(app);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}
