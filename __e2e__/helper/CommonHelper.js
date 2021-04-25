const Helper = require('@codeceptjs/helper')
const codeceptjs = require('codeceptjs')
const _ = require('lodash')

class CommonHelper extends Helper {
  _getAllure () {
    return codeceptjs.container.plugins('allure')
  }

  _getWebDriver () {
    return this.helpers.WebDriver
  }

  _getBrowser () {
    return this._getWebDriver().browser
  }

  _getSessionId () {
    return this._getBrowser().sessionId
  }

  getEnv () {
    const { RUNNER } = process.env
    const env = {
      isSelenoid: RUNNER === 'SELENOID',
      isSauce: RUNNER === 'SAUCE'
    }
    return env
  }

  log (message, prefix = 'log') {
    const allure = this._getAllure()
    const convertedMessage = _.isString(message) || _.isBoolean(message)
      ? message
      : JSON.stringify(message)
    allure.createStep (`[${prefix}] ${convertedMessage}`, () => {})
  }
}

module.exports = CommonHelper
