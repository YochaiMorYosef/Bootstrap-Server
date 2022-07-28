const express = require('express')
const bootsRouter = require('./routers/bootsRouter')
var cors = require('cors')

let app = express()
app.use(cors())

require('./configs/database')

app.use(express.json());

app.use('/api/licenses', bootsRouter)

app.listen(8000);