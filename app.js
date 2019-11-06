const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Now Sure! It works?'))

app.listen(port, () => console.log(`This will be the console message!  ${port}!`))
