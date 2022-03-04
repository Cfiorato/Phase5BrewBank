import {  Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home';
import AllBrews from './components/AllBrews';
import BreweryPage from './components/BreweryPage';
import NavBar from './components/Navbar';

function App() {

  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:3000/authorized_user')
    .then((resp) => {
      if (resp.ok){
        resp.json()
        .then((user) => {
          setAuthenticated(true)
          setUser(user)
        })
      }
    })
  })


  function logOut() {
    fetch('http://127.0.0.1:3000/logout', {
      method: 'DELETE',
    })
    .then(() => {
      setUser(null)
      setAuthenticated(false)
    })
  }


  return (
    <div className="Main">
      <NavBar user={user} logOut={logOut}/>
      <Routes>  
        <Route path="allbrews/:id" element={<BreweryPage />} />
        <Route path="allbrews" element={<AllBrews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
