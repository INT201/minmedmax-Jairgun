const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  min = Math.min(n1,n2,n3)
  max = Math.max(n1,n2,n3)
  med = n1 != min && n1 != max? n1 : n2 != min && n2 != max? n2 : n3 != min && n3 != max? n3 : undefined
  return '{ min: '+ min +', mid: '+ med +' max:'+ max +' }'
}
module.exports = minMedMax
