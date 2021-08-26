const express = require('express')
const server = express()
const port = 3001

server.get('/', (req, res) => {
    console.log(req.headers)
    res.status(200).send('Hello World!')
})

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

