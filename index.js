const jwt = require('jsonwebtoken')
const uuid = require('uuid')

module.exports = function({
  apiKey,
  apiIdentifier,
  orgUnitId,
  iat = 0,
  orders = [],
  privateKey = 'secret',
}) {
  //If iat is 0, use current time otherwise use time supplied
  if (iat === 0) iat = Math.floor(Date.now() / 1000)

  return new Promise(function(resolve, reject) {
    if (!apiKey)
      reject(
        new Error('apiKey is needed to create a valid cardinal commerce jwt!')
      )
    if (!apiIdentifier)
      reject(
        new Error(
          'apiIdentifier is needed to create a valid cardinal commerce jwt!'
        )
      )
    if (!orgUnitId)
      reject(
        new Error(
          'apiIdentifier is needed to create a valid cardinal commerce jwt!'
        )
      )
    jwt.sign(
      {
        iat,
        exp: iat + 7200,
        jti: uuid.v4(),
        iss: apiIdentifier,
        OrgUnitId: orgUnitId,
        Payload: orders,
      },
      privateKey,
      function(err, token) {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}
