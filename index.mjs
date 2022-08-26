import express from 'express'

const app = express()
const port = '3000'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:%s', port)
})
