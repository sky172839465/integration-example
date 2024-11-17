import _ from 'lodash'

import { getJsonReport } from './helper'

const getLogPath = () => {
  const unitTestReportName = 'unit-test.xml'
  const reportDir = './reports'
  return `${reportDir}/${unitTestReportName}`
}

const getLogJSONContent = async (filePath) => {
  const json = await getJsonReport(filePath)
  return _.get(json, 'testsuites.$')
}

const func = {
  getLogPath,
  getLogJSONContent
}

export default func
