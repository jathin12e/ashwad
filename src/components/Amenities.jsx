import React from 'react';
import './amenities.css';
import { FaSwimmer, FaSpa, FaWater, FaDumbbell, FaShip, FaMicrophone, FaUmbrellaBeach } from 'react-icons/fa';

const AmenitiesSection = () => {
  return (
    <div className="amenities-section">
      <img src="/images/DeWatermark.ai_1745430631285.png" alt="Swimming Pool" className="background-image" />
      
      <div className="blue-overlay">
        <div className="pattern-overlay"></div>

        <h2>Our Amenities</h2>
        <p>
          The PG is arranged on five floors without a lift. On the ground floor, apart from the reception,
          there is a mess in groung floor where you can sit and eat food.
        </p>

        <div className="amenities-list">
          <div><FaSwimmer /> Swimming pool</div>
          <div><FaDumbbell /> Gym & yoga</div>
          <div><FaSpa /> Spa & massage</div>
          <div><FaShip /> Boat tours</div>
          <div><FaWater /> Surfing lessons</div>
          <div><FaMicrophone /> Conference room</div>
          <div><FaWater /> Diving & snorkling</div>
          <div><FaUmbrellaBeach /> Private Beach</div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
