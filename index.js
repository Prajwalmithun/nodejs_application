const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({
        message: 'Welcome to the City of Heroes API'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})