import React from "react";
import './header.style.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/Nabiha_collection-removebg-preview.png'
import MobileMenuIcon from "../../components/header/MobileMenuIcon";

const DashboardHeader = () => {



  return(
  <div className="header-container">
    <div className="logo-container">
    <img src={Logo} alt="Logo" />
    </div>
    <div className="menu-icon">
      <MobileMenuIcon/>
      
    </div>
    <div className="header-links-container">
      <Link to={'/'} className="header-link"activeclassName='active'>Specialized Translation services</Link>
      <Link to={'/who-we-work-with'}className="header-link"activeclassName='active'>Who we work with</Link>
      <Link to={'/US-Regions-served'}className="header-link"activeclassName='active'>U.S. Regions served</Link>
      <Link to={'/Inquire-Now'}className="header-link" activeclassName='active'>Inquire Now</Link>
      <Link to={'/'}className="header-link">Contact Us</Link>
    </div>
  </div>
  )
}
export default DashboardHeader