const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')
connectToMongo();
const path = require('path');



// Other middleware and route definitions...

const app = express()
const port = 5000


app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/Company', require('./routes/Company'))
app.use('/api/companies', require('./routes/Company'))

// Serve static files (images, CSS, etc.) from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`iNotebook application listening on port ${port}`)
})