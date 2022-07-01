import React from 'react'
import Header from './Compoment/Header';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Login from './Compoment/Login';

import Singup from './Compoment/Singup';
import { useState } from 'react';

const App = () => {

  const [showmodel,setShowmodel ] =useState(true)
  

  return (
    <BrowserRouter>
    
      <Routes>

        <Route path='/' element={ showmodel &&< Login modelcreate={showmodel} modelupdate={setShowmodel} />}/>
        <Route path='/sing_up' element={<Singup/>}/>
      </Routes>
    </BrowserRouter>
      
      

  )
}

export default App