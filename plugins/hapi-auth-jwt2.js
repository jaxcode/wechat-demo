const config = require('../config')

// const validate = (decoded, request, callback) => {
//   let error
//   // decoded 为 JWT payload 被解码后的数据
//   const {userId} = decoded
//   if (!userId) {
//     return callback(error, false, userId)
//   }
//   const credentials = {userId}
//   // 在路由接口的 handler 通过 request.auth.credentials 获取 jwt decoded 的值
//   return callback(error, true, credentials)
// }

const validate = async (decoded, request, h) => {
  if (!decoded.userId) {
    return { isValid: false }
  } else {
    return { isValid: true }
  }
}

module.exports = server => {
  server.auth.strategy('jwt', 'jwt', {
    key: config.jwtSecret,
    validate: validate,
    verifyOptions: {
      ignoreExpiration: true,    // do not reject expired tokens
      algorithms: [ 'HS256' ]    // specify your secure algorithm
    }
  })
  server.auth.default('jwt')
}