import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from '../../assets/Nabiha_collection-removebg-preview.png'
const Footer = () => {
  const date = new Date();
  return (
    <div className='footer-container'>
      <section className='footer-getInTouch'>
      <h1>Get In Touch With Us</h1>
      <button>Inquire Now</button>
      </section>

      <section className='footer-main-container'>
      <div className='footer-info'>
        <div className='footer-logo-container'>

        <img src={Logo} className='footer-logo' alt='company'/>
        </div>
        <p>Translation, Interpretion, Transcription. subtitling.
          Since 1987
        </p>
        <span>
          You will amazed at how eazy it so to work with us
        </span>
        <div className='social-links-container'>
        <FaLinkedin className='social-link'/>
        <FaFacebook className='social-link'/>
        <FaTwitter className='social-link'/>
        </div>
      </div>
      <div className='footer-links-container'>
      <Link to={'/'} className="footer-link">Specialized Translation services</Link>
      <Link to={'/'}className="footer-link">Who we work with</Link>
      <Link to={'/'}className="footer-link">U.S. Regions served</Link>
      <Link to={'/'}className="footer-link">Inquire Now</Link>
      <Link to={'/'}className="footer-link">Contact Us</Link>
      </div>

        <div className='contact'>
          <ul>By Telephone
            <li>
              <a href='tel:0700317093'>+1-700-3190-93</a>
            </li>
          </ul>

        <p>Get A free Quote</p>
        <p>Newsletters</p>
        </div>
      </section>
      <div className='footer-end'>

      <span>{date.getFullYear()} All rights reserved </span>
      </div>
      
      
    </div>
  )
}

export default Footer