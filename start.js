const app = require('./index');

const PORT = process.env.PORT || 3001;


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});