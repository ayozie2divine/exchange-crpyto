import React from 'react'
import "./Hero.css"
import chizzy from '../../assets/chizzy.png'
import home3 from '../../assets/home3.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div>
            <div class="nav">

<div className='img'>
  <Link to='/Chizzyexchange'>
  <img src={chizzy} alt="" />
  </Link>
</div>
<div className='first'>
  
  <ul className='list'>
      <Link to='/Chizzyexchange'>
      <img src={home3} alt="" />
       </Link>
       <Link to='/Chizzyexchange/Aboutus'>
       <li><a href="">About</a></li>
       </Link>
       <Link to='/Chizzyexchange/Contactus'>
       <li><a href="">Contact</a></li>
       </Link>
  </ul>
 </div>
 </div>
    <div className='btns'>
        <div className='bons'>
        <h1>Trade today with Chizzy Exchange</h1>
        <div className='bn'>
            <h3>Click on Gift Card to purchse a gift (Apple, Amex, Google play, Razer Gold, e.t.c)</h3>
            <a href="https://wa.link/hducdj"><button><h1 className='but'>Gift Card</h1></button></a>
        </div>

        <div className='bn'>
            <h3>Click on Online Banks to get account details and desired destinations (US, UK, Canada, Mexico, Gemany, Spain, Philipine, e.t.c)</h3>
            <a href="https://wa.link/hducdj"><button className='but'><h1>Online Banks</h1></button></a>
        </div>

        <div className='bn'>
            <h3>Click on Crypto to purchase your desired Coin or Token (USDT, $X, BTC, ETH, SOLANA,MEMEFI, DOGS, e.t.c)</h3>
            <a href="https://wa.link/hducdj"><button><h1>Crypto</h1></button></a>
        </div>
        <h2>THANK YOU!!!  for Trading with us today</h2>
        </div>
        <div className='non'></div>
    </div>
    </div>
  )
}

export default Hero
