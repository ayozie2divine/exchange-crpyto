import React from 'react'
import { Link } from 'react-router-dom'
import './Successful.css'
import good from '../../assets/good.png'
function Successful() {
  return (
    <div className='suc'>
        <div className='img'>
            <img src={good} alt="" />
        </div>
          <h1>Registration Successful</h1>
          <p><b>Click on [OK] to continue</b></p>
          <div>
            <Link to='/Chizzyexchange/Login'>
            <button type="button" class="okbutton">OK</button>
            </Link>
          </div>
    </div>
  )
}

export default Successful
