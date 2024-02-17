import React from 'react'
import './pharagraph.css'
import Img1 from '../../assets/ocean.jpg'
const Pharagraph = ({data}) => {



  return (
    <>
        <div className='pharagraph-container'>

            <div className='pharagraph-img-container'>
                 <img src={Img1} alt='customer'/>
             </div>
            <div className='pharagraph-content'>
             <h1>Professional Translation Services</h1>
             <div className='break-point'></div>
             <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
                <a href='/'>See More...</a>
            </div> 

            </div>
        <div className='pharagraph-container'>

            <div className='pharagraph-img-container'>
                 <img src={Img1} alt='customer'/>
             </div>
            <div className='pharagraph-content'>
             <h1>Professional Translation Services</h1>
             <div className='break-point'></div>
             <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
                <a href='/'>See More...</a>
            </div> 

            </div>
            </>
      )
    }
   


    
export default Pharagraph