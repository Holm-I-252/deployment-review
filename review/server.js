const express = require('express')

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Running on ${port}`)
})
