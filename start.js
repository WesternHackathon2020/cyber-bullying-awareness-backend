require('dotenv').config()
const app = require('./index');
const PORT = process.env.PORT || 3001;

const api = require("./api");
app.use(api);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
    console.log(`Server: http://localhost:${PORT}`)
});