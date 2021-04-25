const fs = require('fs').promises
const { getJsonReport } = require('./helper')
const _ = require('lodash')

const functional = async () => {
  const folder = `${process.env.PWD}/output`
  const parallelOutputs = await fs.readdir(folder)
  let flatTestCases = []
  for (const file of parallelOutputs) {
    if (!file.endsWith('xml')) {
      continue
    }

    const json = await getJsonReport(`${folder}/${file}`)
    const suitTestCases = _.get(json, 'ns2:test-suite.test-cases')
    flatTestCases.push(..._.map(suitTestCases, suitTestCase => {
      return _.map(_.get(suitTestCase, 'test-case'), test => _.get(test, '$'))
    }))
  }
  flatTestCases = _.concat(...flatTestCases)
  console.log('bbb', JSON.stringify(flatTestCases))
}

functional()
