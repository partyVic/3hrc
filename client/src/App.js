import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Support from './screens/Support'
import Supporters from './screens/Supporters'
import Forms from './screens/Forms'


const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='grow'>
          <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/supporters" element={<Supporters />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
        <div className=''>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App