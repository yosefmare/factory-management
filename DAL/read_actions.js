const jf = require('jsonfile')
const path = './json/actions.json'

const readFile = async () => {
    const data = await jf.readFile(path)
    return data
}
module.exports = readFile