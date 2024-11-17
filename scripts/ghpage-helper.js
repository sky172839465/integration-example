import { readFileSync } from 'fs'
import _ from 'lodash'

const { name } = JSON.parse(readFileSync('../package.json'))

const getGHPageInfo = async ({ context }, sha) => {
  const prefix = name
  const prNumber = _.get(context, 'payload.pull_request.number')
  const prRunId = _.get(context, 'runId')
  const destination_dir = _.isUndefined(sha) ? `pr${prNumber}-${prRunId}` : sha
  const ghPage = `https://sky172839465.github.io/${prefix}/${destination_dir}`
  return { ghPage, destination_dir }
}

export default {
  getGHPageInfo
}
