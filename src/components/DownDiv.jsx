import React from 'react';
import './downDiv.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function DownDiv() {
  return (
    <div className='down'>
      {/* <div>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div> */}
      <div className='logo2'>
        <h1>MOVIEFLIX</h1>
      </div>
      <div className='list' style={{marginTop:'80px'}}>
        <ul>
          <li>Audio Description</li>
          <li>Gift Cards</li>
          <li>Investor Relations</li>
          <li><button className='button'>SERVICE</button></li>
        </ul>
      </div>
      <div className='list'>
        <ul>
          <li>Terms of Use</li>
          <li>Legal Notices</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className='list'>
        <ul>
          <li>Help Center</li>
          <li>Media Center</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className='list'>
        <ul>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default DownDiv;
