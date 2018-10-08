require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
// const routesHelloHapi = require('./routes/hello-hapi')
// const routesShops = require('./routes/shops')
// const routesOrders = require('./routes/orders')
// const pluginHapiSwagger = require('./plugins/hapi-swagger')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const Pack = require('package')

const server = Hapi.server({...config})

const init = async () => {
  // await server.register(pluginHapiSwagger)

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Test API Documentation',
          version: Pack.version,
        },
      }
    }
  ])

  // server.route([
  //   ...routesHelloHapi,
  //   ...routesShops,
  //   ...routesOrders
  // ])
  
  server.route([{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log(h)
      return 'hello hapi'
    },
    options: {
      tags: ['api']
    }
  }])

  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch(err) {
    console.log(err)
  }
}

init()