import React from 'react'
import Contact from '../Contact/Contact'
import Feature from '../Feature/Feature'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'
import Footer from './Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <Feature />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
