import React from 'react'
import './food.css'
const food = () => {
  return (
    <div className='food-position'>
        <img src='/images/DeWatermark.ai_1745582752148.png' height={500}/>
        <div>
            <h1>OUR FOOD</h1>
            <p style={{lineHeight:"1.8" , color:"grey" , fontWeight:"bold" , fontFamily:"sans-serif"}}>Enjoy the convenience of delicious,home-style South Indian food served right <br />on the ground floor of our PG.
            Experience flavorful meals with <br />easy access throughout your comfortable stay.</p>
            <div className='food-position-1'>
                <div>
                    <h3 style={{color:"black"}}>BreakFast</h3>
                    <ul>
                        <li>Idly</li>
                        <li>Dosa</li>
                        <li>Pongal</li>
                        <li>Chepathi</li>
                        <li>Upma</li>
                        <li>Lemon Rice</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color:"black"}}>Lunch</h3>
                    <ul>
                        <li>Sambar Rice</li>
                        <li>Pudhina Rice</li>
                        <li>Mango Rice</li>
                        etc ...
                    </ul>
                </div>
                <div>
                    <h3 style={{color:"black"}}>Dinner</h3>
                    <ul>
                        <li>Rasam</li>
                        <li>Buttermilk</li>
                        <li>Curries</li>
                        <li>Chicken</li>
                        etc ..
                    </ul>
                </div>
            </div>
            <h3 className='head'>Note:</h3>
            <ul style={{color:"grey" , fontWeight:"bold"}}>
                <li>In Lunch - Rice and One Curry should be provided</li>
                <li>In Dinner - Rice and One curry and every day Rasam or Buttermilk should be provided</li>
            </ul>
        </div>
    </div>
  )
}

export default food;