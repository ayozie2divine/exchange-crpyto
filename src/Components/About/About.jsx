import React from 'react'
import "./About.css"
import tiktok from '../../assets/tiktok.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom'
import chizzy from '../../assets/chizzy.png'
import home3 from '../../assets/home3.png'
function About() {
  return (
    <div>
            <div class="navs">

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
 <div className='about'>
        <div className='ww'>
        <div className='welcome'><h1>Welcome to Chizzy Exchange</h1>   <h2>[The home of all Digital Exchanges]</h2></div>
      <p>Buy and sell your Gift Cards</p>
      <p>Buy and sell your Bitcoin, Ethereum, Solana, Dogs, $X(X Empire), Memefi, all Crypto tokens and Coins today!!!!</p>
      <p>Make your international and intercontinental transfers to your family, freinds and loved ones today using our tested and trusted Paypal, Venmo, Cash App, Zelle. To all country destinations like (UK, US, Canada, Australia, France, Germany, Mexico, Philipine, Spain and alot more)</p>
      <p>Trade with us today @chizzyexchange and Enjoy the best exchange rates today with high effeciency too......</p>
      <p>
        <p>
        $100 - $999(1300-1350 per dollar)
        </p>
        <p>
        $1,000-$1,999(1400-1450 per dollar)
        </p>
        <p>
        $2,000-$10,000(1500-$1600 per dollar and also negotiable)
        </p>
      </p>
      <p>for our online bank:
      [Family & freinds- max $10,000]
      [Goods and Services- ask for limit]  
      </p>
      <div className='www'></div>
        </div>
        <div class="footer">
    <a href=""><h2>&copy; copyright: chizzyexchange</h2></a>
    <h2>Website designer: <a href="tel:+2349134732149" className='num'>09134732149</a></h2>
    <h2 className='f'>Follow our socials:</h2>
    <div className='socials'>
    <a href="https://www.facebook.com/profile.php?id=100089248630142&mibextid=LQQJ4d" className='fb'><img src={facebook} alt="" /></a>
    <a href="https://www.instagram.com/chizzy_exch?igsh=MWl3N3Nmcm9rczJvaA%3D%3D&utm_source=qr" className='ig'><img src={instagram} alt="" /></a>
    <a href="https://www.tiktok.com/@chizzy_wisdom01?_t=8rsQNYh82Tw&_r=1"><img src={tiktok} alt='' /></a>
    </div>
</div>
</div>
    </div>
  )
}

export default About
