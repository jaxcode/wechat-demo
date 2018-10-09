module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'hello hapi'
    },
    options: {
      tags: ['api'],
      description: 'hello hapi'
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
      description: 'hello hapi view'
    }
  }
]