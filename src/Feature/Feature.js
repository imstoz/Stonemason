import React from 'react'
import '../App.css';
import Stone1 from '../stone-imgs/featuregeordiespond.jpg';
import Stone2 from '../stone-imgs/AllModCons.jpg';
import Stone3 from '../stone-imgs/featuredufc.jpg';
import { Link } from 'react-router-dom';

function Feature() {
    return (
        <div className="feature-container" id="products">
            <div className="feature-content">
                <h1 className="products-h1">Products</h1>
                <Link to="/products/textstones" style={{ color: 'black' }}><div className="feature-card">
            <h2>Text</h2>
            <img src={Stone1} style={{ "width" : "100%" }}/>
            <p className="feature-p">Choose what text and image you would like for your stone. Click the button below to view examples.</p>
                <button>View Text Stones</button>
            </div>
            </Link>
            <Link to="/products/musicstones" style={{ color: 'black' }}><div className="feature-card">
            <h2>Music</h2>
            <img src={Stone2} style={{ "width" : "100%" }}/>
            <p className="feature-p">Would you like your favourite artists album cover? Click the button below to view examples.</p>
                <button>View Music Stones</button>
            </div>
            </Link>
            <Link to="/products/footballstones" style={{ color: 'black' }}><div className="feature-card">
            <h2>Football</h2>
            <img src={Stone3} style={{ "width" : "100%" }}/>
            <p className="feature-p">Would you like your favourite football teams badge? Click the button below to view examples.</p>
               <button>View Football Stones</button>
            </div>
            </Link>
            {/* <div className="feature-card">
            <h2>Music</h2>
            <img src={Stone1} style={{ "width" : "100%" }}/>
            <p>A pseudo-Latin text used in web design, layout, 
                and printing in place of English to emphasise design elements.</p>
            </div> */}
            </div>
        </div>
    )
}

export default Feature
