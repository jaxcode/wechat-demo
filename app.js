require('env2')('./.env')
const Hapi = require('hapi')
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
const routesUsers = require('./routes/users')
// const routesOrders = require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const pluginHapiPagination = require('./plugins/hapi-pagination')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = Hapi.server({
  host: config.host,
  port: config.port
})

const init = async () => {
  await server.register(pluginHapiSwagger)
  await server.register(pluginHapiPagination)
  await server.register(hapiAuthJWT2)
  pluginHapiAuthJWT2(server)
  
  server.route([
    ...routesHelloHapi,
    ...routesShops,
    ...routesUsers
  ])

  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch(err) {
    console.log(err)
  }
}

init()