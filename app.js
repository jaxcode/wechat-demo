require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
// const routesOrders = require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const pluginHapiPagination = require('./plugins/hapi-pagination')

const server = Hapi.server({...config})

const init = async () => {
  await server.register(pluginHapiSwagger)
  await server.register(pluginHapiPagination)
  
  server.route([
    ...routesHelloHapi,
    ...routesShops
  ])

  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch(err) {
    console.log(err)
  }
}

init()