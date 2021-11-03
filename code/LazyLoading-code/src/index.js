

document.addEventListener('click',()=>{
  import (/* webpackPrefetch: true */ './click.js').then(({default :func}) => {
    func()
  })
  // const ele = document.createElement('div')
  // ele.innerHTML ='hhh'
  // document.body.appendChild(ele)
})

