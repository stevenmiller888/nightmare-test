const Nightmare = require('nightmare')
const test = require('ava')

test('demo form creates leads', async t => {
  await Nightmare()
  .goto('https://segment.com/contact/demo')
  .type('.SupportForm input[name="email"]', 'adkjasldfj')
  .type('.SupportForm input[name="phone"]', 'a091fehio')
  .type('.SupportForm input[name="name"]', '093eifhon')
  .type('.SupportForm input[name="company"]', 'oiwefh')
  .end()
})

test('can visit url', async t => {
  const url = 'https://www.google.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'https://segment.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'http://abcnews.go.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'http://www.cnn.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'https://github.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'https://www.facebook.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url', async t => {
  const url = 'https://www.apple.com/'
  const page = await Nightmare().goto(url)
  t.is(page.url, url)
  t.is(page.code, 200)
})

test('can visit url and click a link', async t => {
  const url = 'https://www.apple.com/'
  const link = await Nightmare().goto(url).click('a[href="/mac/"]').url()
  t.is('https://www.apple.com/mac/', link)
})
