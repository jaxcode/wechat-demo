const Joi = require('joi')
const models = require('../models')
const { paginationDefine } = require('../utils/router-helper')
const GROUP_NAME = 'shops'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      const {rows: results, count: totalCount} = await models.shops.findAndCountAll({
        attributes: ['id', 'name'],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      return {results, totalCount}
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          ...paginationDefine
        }
      }
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, h) => {
      const {rows: results, count: totalCount} = await models.goods.findAndCountAll({
        where: {
          shop_id: request.params.shopId
        },
        attributes: ['id', 'name'],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      return {results, totalCount}
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
      validate: {
        params: {
          shopId: Joi.number().integer().required().description('店铺的id').error(new Error('订单号必须是数字'))
        },
        query: {
          ...paginationDefine
        }
      }
    }
  }
]