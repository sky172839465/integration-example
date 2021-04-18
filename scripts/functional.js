const { getJsonReport } = require('./helper')
const _ = require('lodash')

const functional = async () => {
  const json = await getJsonReport(`${process.env.PWD}/reports/functional-test.xml`)
  console.log(_.get(json, 'testsuites.$'))
}

functional()
