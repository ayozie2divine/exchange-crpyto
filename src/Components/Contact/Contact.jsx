import React from 'react'
import './Contact.css'
import whatsapp from '../../assets/whatsapp.png'
import phone1 from '../../assets/phone1.png'
import gmail from '../../assets/gmail.png'
import tiktok from '../../assets/tiktok.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom'
import chizzy from '../../assets/chizzy.png'
import home3 from '../../assets/home3.png'
function Contact() {
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
      <div className='con'>
        <h2>
            For more information/pending transfer, contact our customer service:
        </h2>
        <div className='details'>
            <a href="tel:+2348067614968" className='aaa'><img src={phone1} alt="" /><h3>08067614968</h3></a> 
            <a href="mailto:ayoziewisdom2@gmail.com" className='aa'><img src={gmail} alt="" /><h4>ayoziewisdom2@gmail.com</h4></a>
            <a href="https://wa.link/94xvpw" className='a'><img src={whatsapp} alt="" /><h4>Whatsapp</h4></a>
      </div>
</div>
      <div class="footers">
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
  )
}

export default Contact
