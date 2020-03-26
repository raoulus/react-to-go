const express = require('express')
const join = require('path').join
const http = require('http')
const compression = require('compression')

const PORT = 3333
const cwd = process.cwd()
const app = express()

app.use(compression())
app.disable('x-powered-by')

app.use(express.static(join(cwd, 'public')))

app.get('*', (req, res) => {
  res.sendFile(join(cwd, 'public', 'index.html'))
})

let server = http.createServer(app).listen(PORT, () => {
  let host = server.address().address
  console.info(`app is listening at http://${host}:${PORT}`)
})
