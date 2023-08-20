import React from 'react'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Testimonials } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  )
}

export default App