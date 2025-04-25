import React, { useState, useEffect } from 'react';
import Nav from './nav';
import './home.css';
import Amenities from './Amenities';
import Rooms from './rooms';
import Instruct from './instruct'
import Food from './food'
import Contact from './contact';

const Home = () => {
  const images = [
    '/images/WhatsApp Image 2025-03-23 at 21.54.01_ea0765a3.jpg',
    '/images/WhatsApp Image 2025-03-23 at 22.06.57_c830dd15.jpg',
    '/images/Screenshot 2025-04-14 013029.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className='back'>
        <Nav />
        <div className='home-position'>
          <div className='home-positioon-1'>
            <h1 style={{fontSize:"60px", fontFamily:"Roboto"}}> Ashwad Andhra PG<span style={{fontSize:"20px" , color:"red"}}><br/>~Your Comfort Our Responsibility</span></h1>
            
            <p style={{ color: 'white' , fontWeight:"bold",lineHeight:"1.7"}}>
              Find your community and convenience here! We offer comfortable <br />
              sharing rooms (1,2, 3, 4 beds) and serve delicious South Indian food,<br />
              <span style={{marginRight:"37%"}}>making your stay easy and enjoyable.</span>
            </p>
          </div>
          <div className='carousel-container'>
            
            <img src={images[currentIndex]} alt={`Paying Guest Room ${currentIndex + 1}`} className='carousel-image' />
            
            <div className='carousel-dots'>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='back-1'>
         <img src='\images\WhatsApp Image 2025-03-23 at 21.54.04_f54f4bd0.jpg' height={300}/>
         <div>
          <span style={{fontWeight:"bold", color:"red" , fontSize:"40px"}}>___</span>
          <p style={{color:"grey", fontWeight:"bold"}}>Rising Comfort to Highest Level</p>
          <h1 style={{fontFamily:"serif"}}>Welcome To Ashwad Andhra PG </h1>
          <p style={{color:"grey", fontWeight:"bold", lineHeight: "1.8"}}>Find your community and convenience here! Experience comfortable <br />and budget-friendly
             stays in our 1, 2, 3, and 4 sharing rooms, perfect<br /> for students and working professionals. <br /></p>
             <p style={{color:"grey", fontWeight:"bold", lineHeight: "1.8"}}>Enjoy affordable accommodation complete with the authentic <br />flavors of delicious, 
             home-style South Indian cuisine.Making your stay <br />easy, enjoyable, and a true home away from home.</p>
          <button className='btn'>Read More</button>
         </div>
      </div>
      <Amenities />
      <Rooms />
      <Instruct />
      <Food />
      <Contact />
    </div>
  );
};

export default Home;