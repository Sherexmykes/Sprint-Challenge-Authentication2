require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT || 4000

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
  })
}
