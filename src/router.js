module.exports = {
    configureRoutes: configureRoutes
}

function configureRoutes(expressApp) {
    expressApp.get('/hello-world', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.json({message: 'Hello, World!'});
    });
}