describe('Google', () => {
  let page

  beforeAll(async () => {
    page = (await browser.pages())[0]
    await page.goto('https://google.com')
  })

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })
})
