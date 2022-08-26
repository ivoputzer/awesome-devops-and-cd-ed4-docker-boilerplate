import express from 'express'
import ehw from 'express-hello-world'

const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:%s', port)
})
