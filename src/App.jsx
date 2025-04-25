import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './components/home'
import Rooms from './components/rooms'
import Contact from './components/contact'

const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/contact' element = {<Contact />} />
       </Routes>
    </div>
  )
}

export default App