import React from 'react'
import '../App.css';
import { BiText } from "react-icons/bi";
import { IoText } from "react-icons/io5";
import { FaImage, FaPaintBrush, FaMusic } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";

function Pricing() {
    return (
        <div className="pricing-container" id="pricing">
            <div className="pricing-content">
            <h1 className="pricing-h1">Pricing</h1>
            <h4 className="pricing-tag">(prices may change depending on design request)</h4>
            <div className="pricing-card">
                <h2>Text Only</h2>
                <h3>£<span>29</span></h3>
                <div className="line"></div>
                <p><IoText/> &nbsp; Choose your Text</p>
                <p><BiText/> &nbsp; Pick a Font Style</p>
                <p><FaPaintBrush/> &nbsp; Plain or Painted?</p>
            </div>

            <div className="pricing-card">
                <h2>Text & Image</h2>
                <h3>£<span>39</span></h3>
                <div className="line"></div>
                <p><IoText/> &nbsp; Choose your Text</p>
                <p><FaImage/> &nbsp; Choose your Image</p>
                <p><BiText/> &nbsp; Pick a Font Style</p>
                <p><FaPaintBrush/> &nbsp; Plain or Painted?</p>
            </div>

            <div className="pricing-card">
                <h2>Music/Football</h2>
                <h3>£<span>49</span></h3>
                <div className="line"></div>
                <p><FaMusic /> &nbsp; Choose your album cover</p>
                <p>or</p>
                <p><GiSoccerBall/> &nbsp; Choose your football team badge</p>
            </div>
            </div>
        </div>
    )
}

export default Pricing
