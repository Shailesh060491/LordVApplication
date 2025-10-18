import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.js'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Industries from './pages/Industries.jsx'
import Expertise from './pages/Expertise.jsx'
import Payroll from './pages/Payroll.jsx'
import Gallery from './pages/Gallery.jsx'
import Clients from './pages/Clients.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
