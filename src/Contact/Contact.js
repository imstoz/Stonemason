import React from 'react'
import '../App.css';


function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-content">
            <h1 className="contact-h1">Contact</h1>
            <h4 className="contact-p">Interested in purchasing a stone? Then drop me an email!</h4>
                <div className="signature-img">

                </div>
                <form action="mailto:markstorrierstonemason@gmail.com" method="POST" action="../form.php" encType='text/plain' name='EmailForm' className="contact-wrapper">
                    
                    <input type="text"
                    name="name" placeholder="Full Name"/>

                    <input type="email"
                     name="email" placeholder="Email Address"/>

                    <textarea name="message" id="message" placeholder="Your Message"></textarea>

                    <button class="submit-btn" type="submit">Send Message</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact 

