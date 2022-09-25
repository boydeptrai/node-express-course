const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')

dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL, () =>{
    console.log('CONNECT TO MONGODB...')
})
app.get('/', (req, res) =>{
    res.send('Tasl Manager App')
})

app.use('/api/v1/tasks',tasks)

const port = 3000

app.listen(port, () => console.log(`Server is listening on port ${port}...`));