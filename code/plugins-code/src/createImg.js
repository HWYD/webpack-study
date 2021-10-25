import theImg from './wx1.jpg' 
import style from './index.scss'
export default function createImg(){
  let img = new Image()
  img.src = theImg
  img.classList.add(style.theimg)
  let root = document.getElementById('root')
  root.append(img)  

}