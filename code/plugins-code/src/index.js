// ES Moudule  模块引入方式

// import Header from './header.js'
// import Slider from  './slider.js'
import theImg from './wx1.jpg' 
// import style from './index.scss'
// import createImg from './createImg'
// createImg()
import './index.scss'

let img = new Image()
img.src = theImg
img.classList.add('theimg')
let root = document.getElementById('root')
root.append(img)  
let font = document.getElementById('font')
font.innerHTML = '<div class="iconfont icon-duijujilu"></div>'
// new Header()
// new Slider()

