const {jwtHeaderDefine} = require('../utils/router-helper')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return request.auth.credentials
      // return 'haha'
    },
    options: {
      tags: ['api'],
      description: 'hello hapi',
      validate: {
        ...jwtHeaderDefine
      }
    }
  },
  {
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
      return h.file('./public/hello.html')
    },
    options: {
      tags: ['api', 'view'],
      description: 'hello hapi view',
    }
  }
]