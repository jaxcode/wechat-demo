const inert = require('inert')
const vision = require('vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = () => {
  return [
    inert,
    vision,
    {
      plugin: hapiSwagger,
      options: {
        info: {
          title: '接口文档',
          version: package.version
        },
        grouping: 'tags',
        tags: [
          {name: 'test', description: '测试相关'}
        ]
      }
    }
  ]
}