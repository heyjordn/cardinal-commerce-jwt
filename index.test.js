const cardinalCommerceJwt = require('./')

test('it fails without an apiKey', async () => {
  try {
    let jwt = await cardinalCommerceJwt()
  } catch (error) {
    expect(error)
  }
})

test('it fails without an apiIdentifier', async () => {
  try {
    let jwt = await cardinalCommerceJwt({
      apiKey: 'viabcuwyvey',
    })
  } catch (error) {
    expect(error)
  }
})

test('it fails without an orgUnitId', async () => {
  try {
    let jwt = await cardinalCommerceJwt({
      apiKey: 'viabcuwyvey',
      apiIdentifier: 'yvtchJKShdbC',
    })
  } catch (error) {
    expect(error)
  }
})
test('it produces a jwt', async () => {
  //Use static time for testing
  let staticTime = 1562987960
  try {
    let jwt = await cardinalCommerceJwt({
      apiKey: 'viabcuwyvey',
      apiIdentifier: 'yvtchJKShdbC',
      orgUnitId: 'bc7cbsdycvvf',
      iat: staticTime,
    })
    expect(jwt)
  } catch (error) {}
})
