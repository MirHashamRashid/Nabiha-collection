import React from 'react';
import './card.css';
import { BsArrowReturnRight } from "react-icons/bs";

const Card = ({data}) => {
    // const file = Array.(data)
  return (
     <>
    <div className='card-container'>

            <div className='card-arrow'>
                <BsArrowReturnRight/>   
            </div>
            <div className='card-content'>
            <h2>Business Translation services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
            </div> 
     </div>
     </>)
    
  
}

export default Card