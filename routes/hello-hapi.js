module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply('hello hapi')
      },
      // tags: ['api', 'tests'],
      // description: '测试hello-hapi'
    }
  }
]

