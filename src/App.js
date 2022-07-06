import React from 'react'
import { Footer } from './compoment/Footer';
import Header from './compoment/Header';
import Sidebox from './compoment/Sidebox';

const App = () => {
  return (
    <div className='flex  flex-col'>
       <Header/> 
       <Sidebox/>
      {/* <Footer /> */}
    </div>
  )
}

export default App