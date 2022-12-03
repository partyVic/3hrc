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
      <Header />
      <div>
        <Routes>
          <Route path="/support" element={<Support />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App