
async function getComponent() {
  const { default:_ } = await import(/* webpackChunkName:"lodash" */'lodash')
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['Dell','lee'],'-')
    return ele
}

document.addEventListener('click',()=>{
  getComponent().then(ele => {
    document.body.appendChild(ele)
  })
})

