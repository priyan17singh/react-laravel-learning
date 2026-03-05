import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ErrorPageContainer from './pages/NotFound'
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/about" element={<h2>About Page</h2>} />
      <Route path="/contact" element={<h2>Contact Page</h2>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
