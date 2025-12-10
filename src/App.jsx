import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Productview from './page/Productview'

function App() {
  const [count, setCount] = useState(0)
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/products/:id" element={<Productview />} />
     
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
