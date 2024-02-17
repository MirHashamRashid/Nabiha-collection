import { Link } from "react-router-dom";
import './MobileMenu.css';
const MobileMenu = () => {
    return(
        <div className="Mobile-Menu-container">
       <Link to={'/'} className="menu-link">Specialized Translation services</Link>
      <Link to={'/'}className="menu-link ">Who we work with</Link>
      <Link to={'/'}className="menu-link">U.S. Regions served</Link>
      <Link to={'/'}className="menu-link ">Inquire Now</Link>
      <Link to={'/'}className="menu-link">Contact Us</Link>
        </div>
    )
}
export default MobileMenu;