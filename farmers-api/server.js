const app = require('./config/express')();
const port = app.get('port');

// start server 
app.listen(port, () => {
    console.log(`Farmers API is running on port ${port}`);
});

module.exports = app;