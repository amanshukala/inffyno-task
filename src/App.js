import React from 'react'
import { Footer } from './compoment/Footer';
import Header from './compoment/Header';
import Homes from './compoment/Home/Homes';
import Sidebox from './compoment/Sidebox';

const App = () => {
  return (
    <div className='flex  flex-col'>
       <Header/> 
       <Sidebox/>
       <Homes/>
       <Footer />
    </div>
  )
}

export default App

// overflow: hidden;
// text-overflow: ellipsis;
// max-height: 20px;
// max-width: 150px;
// white-space: nowrap;