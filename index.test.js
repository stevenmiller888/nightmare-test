const Nightmare = require('nightmare')
const test = require('ava')

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
