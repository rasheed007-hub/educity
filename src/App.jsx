import React, { useState } from 'react'
import Navbar from './components/Navebar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESRIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='Contact us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer />
    </>
  )
}

export default App