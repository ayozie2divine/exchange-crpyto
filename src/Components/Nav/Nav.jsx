import React from 'react'
import "./Nav.css"
import chizzy from '../../assets/chizzy.png'
import home3 from '../../assets/home3.png'
import { Link } from 'react-router-dom'


function Nav() {
  return (
<div class="nav">

<div className='img'>
  <Link to='/Chizzexchange'>
  <img src={chizzy} alt="" />
  </Link>
</div>
<div className='first'>
  
  <ul className='list'>
      <Link to='/Chizzexchange'>
      <img src={home3} alt="" />
       </Link>
       <Link to='/Chizzexchange/Aboutus'>
       <li><a href="">About</a></li>
       </Link>
       <Link to='/Chizzexchange/Contactus'>
       <li><a href="">Contact</a></li>
       </Link>
  </ul>
 </div>
 </div>
  )
}

export default Nav