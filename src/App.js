import React from 'react'
import { Footer } from './compoment/Footer';
import Header from './compoment/Header';
import Homes from './compoment/Home/Homes';
import Sidebox from './compoment/Sidebox';
import {Route,Routes} from "react-router-dom"
import MovieDetaills from './compoment/MovieDetaills';
import MovieTrailer from './compoment/MovieTrailer';
const App = () => {
  return (
    <div className='flex  flex-col '>
        {/* <Header/>   */}
        {/* <Sidebox/>  */}
      
       <Routes>
          <Route  path='/' element={<Homes />}/>
          <Route  path='/watch/:movie_id' element={<MovieDetaills />}/>
          <Route  path='/video/:video_id' element={<MovieTrailer />}/>

       </Routes>
       
        {/* <Footer />  */}
    </div>
  )
}

export default App
