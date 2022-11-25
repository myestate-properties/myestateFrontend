import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'

import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

function Footer() {
  return (
    <footer id="footer">
      <div className='address'>
        <h4>MyEstate Properties Ltd</h4>
        <p>Plot 107 Akinlotan Crescent <br/>
          Victoria Island<br/>
          Lagos State, Nigeria
        </p>
        <p className='text-hover'><em>Mobile: </em> +2348058867077</p>
        <p className='text-hover'><em>Email: </em>info@myestate.com</p>
      </div>

      <div className='copyright'>
        <h4>(c) 2022 MyEstate Properties Ltd</h4>
      </div>

      <div className='social'>
        <div className='text-hover'>
        <Link to="https:facebook.com/myestatepropertiesltd"><i>Email</i><AiOutlineMail className='social-icon' /></Link>
        </div>
        <div className='text-hover'>
          <Link to="https:facebook.com/myestatepropertiesltd"><i>Facebook</i><BsFacebook className='social-icon' /></Link>
        </div>
        <div className='text-hover'>
        <Link to="https:facebook.com/myestatepropertiesltd"><i>Whatsapp</i><BsWhatsapp className='social-icon' /></Link>
        </div>
        <div className='text-hover'>
        <Link to="https:facebook.com/myestatepropertiesltd"><i>Instagram</i><BsInstagram className='social-icon' /></Link>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer