const Joi = require('joi')
const GROUP_NAME = 'shops'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: (request, h) => {
      return '获取店铺列表'
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, h) => {
      console.log(request.query)
      console.log(request.params)
      return '获取店铺的商品列表'
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
      validate: {
        params: {
          shopId: Joi.number().integer().required().error(new Error('订单号必须是数字'))
        }
      }
    }
  }
]