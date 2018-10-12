const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

let shops = []
for (let i = 1; i <= 100; i++) {
  shops.push({ id: i, name: `店铺${i}`, thumb_url: `${i}.png`, ...timestamps })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shops', shops, {})
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize
    return queryInterface.bulkDelete('shops', { id: { [Op.gte]: [0] } }, {})
  }
}