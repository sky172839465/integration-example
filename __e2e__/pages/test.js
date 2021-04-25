Feature('test local')

Scenario('test localhost content', async ({ I }) => {
  const { isSelenoid } = await I.getEnv()
  if (isSelenoid) {
    I.amOnPage('http://test.local.com:3000')
  } else {
    I.amOnPage('http://localhost:3000')
  }
  I.wait(1)
  I.see('Learn React', 'a.App-link')
})
