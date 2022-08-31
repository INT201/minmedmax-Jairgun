const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  min = Math.min(n1,n2,n3)
  max = Math.max(n1,n2,n3)
  mid = n1 !== min && n1 !== max? n1 : n2 !== min && n2 !== max? n2 : n3 !== min && n3 !== max? n3 : undefined
  return `{max: ${max}, mid: ${mid}, min: ${min}}`
}
module.exports = minMedMax
