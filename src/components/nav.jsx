import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <div className='position'>
        <img  src='/images/logo1.png' height={150}/>
        <ul className='position-1'>
            <li className='hovering'>Home</li>
            <li style={{marginLeft:"7%"}} className='hovering'>Rooms</li>
            <li style={{marginLeft:"7%"}} className='hovering'>Location</li>
            <li style={{marginLeft:"7%"}} className='hovering'>Contact</li>
        </ul>
    </div>
  )
}

export default nav