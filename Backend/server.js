require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB().then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch(err => {
    console.error("Failed to connect to the database. Server not started.", err)
});