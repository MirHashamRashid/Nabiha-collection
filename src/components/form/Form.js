import './form.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form-main-container'>
        <ul>
            <p>Tell us about your translation requirements *</p>
            <li>
                languages involved
            </li>
            <li>The purpose of the translation</li>
            <li>Your required turnaround time</li>
            <li>Any specific requirenments</li>
        </ul>
        <div className='form-main'>
        <form  >
          <input type="text" name='name' placeholder='your name*' required />
          <input type="email" name='email' placeholder='Business Email*' required />
          <input type="tel" name='phone' placeholder='123-567-2344' required />
          <textarea name="message" id="message" cols="30" rows="1" placeholder='your message here!'></textarea>
          <button type="submit" className=' btn-primary submit'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Form