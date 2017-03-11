const express = require('express')
const bodyParser = require('body-parser')
const fallback = require('express-history-api-fallback')

const jsonParser = bodyParser.json()
const app = express()
const root = `${__dirname}/public`

app.use(jsonParser)
app.use(express.static(root))
app.use(fallback('index.html', {root}))

// serve mongo and api here

app.listen(process.env.PORT || 8080, () => {
  console.log(`listening on port ${process.env.PORT || 8080}`)
})
