import React from 'react'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import List from './Pages/List';
import Edit from './Pages/Edit';
import View from './Pages/View';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/view/:id" element={<View/>}/>

      <Route path="/edit/:id" element={<Edit/>}/>
    
    </Routes>
      
    </BrowserRouter>
  )
}

export default App