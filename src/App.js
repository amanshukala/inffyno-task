import React from 'react'
import { Footer } from './compoment/Footer';
import Header from './compoment/Header';
import Homes from './compoment/Home/Homes';
import MustWatch from './compoment/MustWatch';
import Sidebox from './compoment/Sidebox';

const App = () => {
  return (
    <div className='flex  flex-col'>
       <Header/> 
       <Sidebox/>
       <Homes/>
       <MustWatch/>
      {/* <Footer /> */}
    </div>
  )
}

export default App