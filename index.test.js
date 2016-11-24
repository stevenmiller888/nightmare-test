const Nightmare = require('nightmare')
const test = require('ava')

test('can visit url', async t => {
  const url = 'https://www.google.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})
