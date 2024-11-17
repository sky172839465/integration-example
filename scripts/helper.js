import { promises as fs } from 'fs'
import xml2js from 'xml2js'

const getJsonReport = async (xmlPath) => {
  const xml = await fs.readFile(xmlPath, 'utf-8')
  const parser = new xml2js.Parser()
  const json = await parser.parseStringPromise(xml)
  return json
}

module.exports = {
  getJsonReport
}
