import React, { useState, useEffect } from 'react';
import './Home.css';
import btc from '../../assets/btc.jpg'
import chime from '../../assets/chime.jpg'
import dollar from '../../assets/dollar.jpg'
import eth from '../../assets/eth.jpg'
import goc from '../../assets/goc.jpg'
import mg from '../../assets/mg.jpg'
import paypal from '../../assets/paypal.jpg'
import rg from '../../assets/rg.jpg'
import steam from '../../assets/steam.jpg'
import t from '../../assets/t.jpg'
import wu from '../../assets/wu.jpg'
import zelle from '../../assets/zelle.jpg'

import tiktok from '../../assets/tiktok.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import { Link } from 'react-router-dom';
import chizzy from '../../assets/chizzy.png';
import home3 from '../../assets/home3.png';

const Home = () => {
  const images = [
    btc,
    chime,
    dollar,
    eth,
    goc,
    mg,
    paypal,
    rg,
    steam,
    t,
    wu,
    zelle,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <div className="navss">
        <div className="img">
          <Link to="/Chizzyexchange">
            <img src={chizzy} alt="" />
          </Link>
        </div>
        <div className="first">
          <ul className="list">
            <Link to="/Chizzyexchange">
              <img src={home3} alt="" />
            </Link>
            <Link to="/Chizzyexchange/Aboutus">
              <li>
                <a href="">About</a>
              </li>
            </Link>
            <Link to="/Chizzyexchange/Contactus">
              <li>
                <a href="">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div>
        <div className="body1">
          <h1 className="h1">
            <marquee behavior="" direction="">
              WELCOME TO CHIZZY EXCHANGE
            </marquee>
          </h1>
        </div>
        <div className="btnn">
          <Link to="/Chizzyexchange/Login/Trade">
            <button type="button" className="btnnnn">
              Click here to Trade
            </button>
          </Link>
        </div>
      </div>

      <div className="abouts">
        <div className="ww">
          <div className="welcome">
            <h1>Welcome to Chizzy Exchange</h1>
            <h2>[The home of all Digital Exchanges]</h2>
          </div>
          <p className='p'>
          <p>Buy and sell your Gift Cards</p>
          <p>Buy and sell your Bitcoin, Ethereum, Solana, Dogs, $X(X Empire), Memefi, all Crypto tokens and Coins today!!!!</p>
          <p>
            Make your international and intercontinental transfers to your family, friends, and loved ones today using our tested and trusted Paypal, Venmo, Cash App, Zelle. To all country destinations like (UK, US, Canada, Australia, France, Germany, Mexico, Philippines, Spain, and a lot more)
          </p>
          <p>Trade with us today @chizzyexchange and Enjoy the best exchange rates today with high efficiency too......</p>
          </p>
        </div>
        </div>

        <div className="www">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      

      <div className="footers">
        <a href="">
          <h2>&copy; copyright: chizzyexchange</h2>
        </a>
        <h2>Website designer: <a href="tel:+2349134732149" className="num">09134732149</a></h2>
        <h2 className="f">Follow our socials:</h2>
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100089248630142&mibextid=LQQJ4d" className="fb">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/chizzy_exch?igsh=MWl3N3Nmcm9rczJvaA%3D%3D&utm_source=qr" className="ig">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/@chizzy_wisdom01?_t=8rsQNYh82Tw&_r=1">
            <img src={tiktok} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
