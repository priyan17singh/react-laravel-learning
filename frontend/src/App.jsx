import { useState } from 'react'
import './index.css'
import { Routes, Route } from "react-router-dom";
import ErrorPageContainer from './pages/NotFound'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import User from './pages/User';

// import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/about" element={<h2>About Page</h2>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/user" element={<Users />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/contact" element={<h2>Contact Page</h2>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
