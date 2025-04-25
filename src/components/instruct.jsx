import React from 'react';
import './instruct.css';


const Instruct = () => {
  return (
    <div className="amenities-section">
      <img src="/images/DeWatermark.ai_1745573713076.png" alt="Swimming Pool" className="background-image" />
      
      <div className="blue-overlay-1">
        <div className="pattern-overlay"></div>

        <h2>Instructions</h2>
        <ul className='ul-position' style={{lineHeight:"1.8"}}>
          <li>Submit two photograph ,residency proof(Permanent) and any photo for necessary police verification.</li>
          <li>please submit room keys at office before leaving the PG.</li>
          <li>1 month prior intimation as notice for leaving the PG.</li>
          <li>Rent to be paid on 1st of every month.</li>
          <li>Any kind of damage , loses shall be the Responsibility of the tenant.</li>
          <li>Kindly  ensure that are power appliance and water taps one are closed before leaving the room.</li>
          <li>Refundable security deposit of 1 month to be paid by every one.</li>
          <li style={{color:"yellow" , listStyle:"none" , fontSize:"larger" , textDecoration:"underline"}}>Food Timings:</li>
          <li>Breakfast - 7:00AM to 10:00AM</li>
          <li>Lunch - 1:30PM to 3:00PM</li>
          <li>Dinner - 8:00PM to 10:00PM</li>
          <li>Lunch Box will be provided in the morning..</li>
          <li>Every Wednesday EGG and Every Sunday Chicken.</li>
         </ul>
        </div>
      </div>
  );
};

export default Instruct;
