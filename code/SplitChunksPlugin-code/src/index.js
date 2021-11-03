//import _ from 'lodash'  //假如大小 1mb
//此处省略10万行代码      //这个也是 1mb

// console.log(_.join(['a','b','c'],'***'))
// console.log(_.join(['a','b','c'],'***'))


// main.js 2mb
// 打包文件会很大，加载时间会很长
// 重新访问我们的页面，又要重新加载2mb


function getComponent() {
  return import(/* webpackChunkName:"lodash" */'lodash').then(({default:_}) =>{
    var ele = document.createElement('div')
    ele.innerHTML = _.join(['Dell','lee'],'-')
    return ele
  })
}

getComponent().then(ele => {
  document.body.appendChild(ele)
})