import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Support from './screens/Support'


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App