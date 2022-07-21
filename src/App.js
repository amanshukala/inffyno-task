import React from 'react'
import Home from './Compoment/Home';
import {Routes,Route} from 'react-router-dom'
import Topnav from './Compoment/Topnav';
import Footer from './Compoment/Footer';
import ScorePage from './Compoment/ScorePage';

const App = () => {
  return (
    < div className='mx-auto max-w-[1366px]'>
    <Topnav />
    <div>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<ScorePage/>}/>
      </Routes>
    </div> 
    
    <Footer />
    </div>
  )
}

export default App;


