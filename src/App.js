import React from 'react'
import Home from './Compoment/Home';
import {Routes,Route} from 'react-router-dom'
import Topnav from './Compoment/Topnav';
import Footer from './Compoment/Footer';

const App = () => {
  return (
    < div className='mx-auto max-w-[1366px]'>
    <Topnav />
    <section className='mx-auto '>
      <Routes >
        <Route path="/" element={<Home/>}/>
      </Routes>
    </section>
    <Footer />
    </div>
  )
}

export default App;