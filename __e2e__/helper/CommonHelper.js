const Helper = require('@codeceptjs/helper')
const codeceptjs = require('codeceptjs')
const _ = require('lodash')

class CommonHelper extends Helper {
  _getAllure () {
    return codeceptjs.container.plugins('allure')
  }

  _getHelper () {
    return this.helpers.WebDriver
  }

  _getBrowser () {
    return this._getHelper().browser
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

  amOnMySite () {
    const { TEST_URL } = process.env
    // const { isSelenoid } = this.getEnv()
    const helper = this._getHelper()
    let url = TEST_URL || 'http://localhost:5173'
    // if (isSelenoid) {
    //   url = 'http://192.168.0.101:3000'
    // }
    helper.amOnPage(url)
    this.log(url)
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
