const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

let goods = []
for (let i = 1; i <= 500; i++) {
  goods.push({ id: i, shop_id: i%5+1, name: `店铺${i}`, thumb_url: `${i}.png`, ...timestamps })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('goods', goods, {})
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize
    return queryInterface.bulkDelete('goods', { id: { [Op.gte]: [0] } }, {})
  }
}