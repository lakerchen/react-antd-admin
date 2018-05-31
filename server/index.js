var jsonServer = require('json-server')
var server = jsonServer.create()
var data = require('./data/index')
var fs = require('fs')
var path = require('path')

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data))
var router = jsonServer.router(path.join(__dirname, 'db.json'))
var middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', require('./session/login'))
server.post('/logout', require('./session/logout'))
server.post('/menu', require('./common/menu'))

// Use default router
server.use(router)

server.listen(8001, function () {
  console.log('JSON Server is running')
})