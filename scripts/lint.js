const { getJsonReport } = require('./helper')
const _ = require('lodash')
const packageConfig = require('../package.json')

const lint = async () => {
  const unitTestReportName = _.get(packageConfig, 'jest-junit.outputName')
  const json = await getJsonReport(`${process.env.PWD}/reports/${unitTestReportName}`)
  console.log(_.get(json, 'testsuites.$'))
}

lint()
