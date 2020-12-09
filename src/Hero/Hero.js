import React from 'react'
import Logo from '../images/mark-logo.png'
import '../App.css';

function Hero() {
    return (
        <div className="hero-container" id="home">
            <div className="hero-content">
            <div className="left-hero">
                <h1 className="hero-name">Mark Storrier</h1>
                <h2 className="hero-tag"><span>Stone</span>mason</h2>
                <p className="hero-p">With over 30 years of experiance as a Stonemason. Personalized hand-crafted stones in a size of your choice.
                </p>
                <button><a href="#pricing">Pricing Options</a></button>
                </div>
            <div className="right-hero">
                <div className="hero-img-container">
                    <img src={Logo} className="logo"/>
                </div>
                </div>
            </div>            
        </div>
    )
}

export default Hero
