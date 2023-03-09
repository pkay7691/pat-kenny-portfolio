import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidenav from './components/Sidenav'
import Routes from './Routes'
import Socialbar from './components/Socialbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Socialbar/>
      <Sidenav />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
