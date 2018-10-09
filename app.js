require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
// const routesOrders = require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')


const server = Hapi.server({...config})

const init = async () => {
  await server.register(pluginHapiSwagger)

  // server.route([
  //   ...routesHelloHapi,
  //   ...routesShops,
  //   ...routesOrders
  // ])
  
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