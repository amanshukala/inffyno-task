import React from 'react'
import Home from './Compoment/Home';
import {Routes,Route} from 'react-router-dom'
import Topnav from './Compoment/Topnav';
import Footer from './Compoment/Footer';
const App = () => {
  return (
    <>
    <Topnav />
    <section>
      <Routes >
        <Route path="/" element={<Home/>}/>
      </Routes>
    </section>
    <Footer/>
    </>
  )
}

export default App;