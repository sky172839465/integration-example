const _ = require('lodash')

const { getJsonReport } = require('./helper')

const getLogPath = () => {
  const unitTestReportName = 'unit-test.xml'
  const reportDir = './reports'
  return `${reportDir}/${unitTestReportName}`
}

const getLogJSONContent = async (filePath) => {
  const json = await getJsonReport(filePath)
  return _.get(json, 'testsuites.$')
}

module.exports = {
  getLogPath,
  getLogJSONContent
}
