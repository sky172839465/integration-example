describe('Google', () => {
  let page

  beforeAll(async () => {
    page = (await browser.pages())[0]
    await page.goto('https://google.com')
  })

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })

  it('should have q input', async () => {
    await page.waitForTimeout(3000)
    console.log('Waited a second!')
    const input = await page.$('input[name="q"]')
    expect(await page.evaluate(input => input.type, input)).toEqual('text')
  })
})
