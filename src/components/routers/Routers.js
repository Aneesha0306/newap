import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'

import {Routes,Route} from 'react-router-dom'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
    </Routes>
  )
}

export default Routers
