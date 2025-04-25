import React from 'react'
import './rooms.css'

const room = [
  {
    id: 1,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.00_3bfa1129.jpg",
    name: "Single Share",
    price: 16000
  },
  {
    id: 2,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.01_36adb159.jpg",
    name: "Double Share",
    price: 9500
  },
  {
    id: 3,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.02_4c21cfba.jpg",
    name: "Three Share",
    price: 8500
  },
  {
    id: 4,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.00_7a5e651d.jpg",
    name: "Four Share",
    price: 7500
  },
]
const room1 = [
  {
    id: 1,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.00_3bfa1129.jpg",
    name: "Single Share",
    price: 16000
  },
  {
    id: 2,
    image: "/images/WhatsApp Image 2025-04-07 at 23.00.40_5d1c34ed.jpg",
    name: "Double Share",
    price: 9500
  },
  {
    id: 3,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.02_4c21cfba.jpg",
    name: "Three Share",
    price: 8500
  },
  {
    id: 4,
    image: "/images/WhatsApp Image 2025-03-23 at 21.54.00_7a5e651d.jpg",
    name: "Four Share",
    price: 7500
  },
]

const Rooms = () => {
  return (
    <div className='back1'>
      <div className='room-position'>
        <div>
          <h1 style={{ fontWeight: "bold", color: "red", fontSize: "40px" }}>___</h1>
          <p style={{ color: "grey", fontWeight: "bold" }}>Rising Comfort to Highest Level</p>
          <h1 style={{ fontFamily: "serif" }}>ROOMS</h1>
        </div>
        <button style={{ fontSize: "20px" }} className='btn'>View All</button>
      </div>

      <div className='room-position-1'>
        <div className='head'>
          <h1>PG1</h1>
        </div>

        <div className='room-position-2'>
          {room.map((p) => {
            return (
              <div key={p.id} className="room-card">
                <img src={p.image} alt={p.name} className="room-image" />
                <h2>{p.name}</h2>
                <p>₹{p.price}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='room-position-1'>
        <div className='head'>
          <h1>PG2</h1>
        </div>

        <div className='room-position-2'>
          {room1.map((p) => {
            return (
              <div key={p.id} className="room-card">
                <img src={p.image} alt={p.name} className="room-image" />
                <h2>{p.name}</h2>
                <p>₹{p.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Rooms;
