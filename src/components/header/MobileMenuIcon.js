import React, {useState}from 'react'
import './MobileMenuIcon.css'
import MobileMenu from './MobileMenu';
import { IoMenuSharp,IoCloseSharp } from "react-icons/io5";
const MobileMenuIcon = () => {
  
  const [toggleMenu, isSetToggleMenu] = useState(false)
  const [openMenu, isSetOpenMenu] = useState(false)

  const handelClick = () =>{
    isSetOpenMenu(!openMenu)
  }
  return (
    <div onClick={handelClick} className='Menu-icon-container'>
        {
          !openMenu ?
          <IoMenuSharp style={{fontSize: 45 +'px', cursor:'pointer'}}/>
          :
          <IoCloseSharp style={{fontSize: 45 +'px', cursor:'pointer'}} />
        }
        {
          openMenu ? <MobileMenu/> : ''
        }
    </div>
  )
}

export default MobileMenuIcon