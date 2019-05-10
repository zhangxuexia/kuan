'use strict'
/* PROJECT:项目名，BASE_PATH：项目路径，BASE_LINK：域名，OUTPUT_PATH_JS：打包js路径，OUTPUT_PATH_HTML：打包html路径，OUTPUT_PATH_ICO：ico源路径*/
let obj = process.argv.splice(2)
module.exports = {
  NODE_ENV: '"production"',
  BASE_PATH: JSON.stringify(obj[0]),
  SN_URL: JSON.stringify(obj[1])
}
