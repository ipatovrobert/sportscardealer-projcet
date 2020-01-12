import React from 'react'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'

function Footer() {
    return (
        <div className='footer margin-top'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='footer-links'>
                        <h1 className='footer-title'>Links</h1>
                        <a href="/" className='footer-links--item'>Pictures</a>
                        <a href="/" className='footer-links--item'>Videos</a>
                        <a href="/" className='footer-links--item'>GDPR</a>
                    </div>
                    <div className='footer-social'>
                        <h1 className='footer-title'>Stay tuned!</h1>
                        <p className='footer-social--text'>Connect with us!</p>
                        <a href='//www.facebook.com'><img src={facebook} alt='facebook' className='footer-social--images'></img></a>
                        <a href='//www.twitter.com'><img src={twitter} alt='twitter' className='footer-social--images'></img></a> 
                    </div>
                    <div className='footer-email'>
                        <h1 className='footer-title'>Email updates</h1>
                        <p className='footer-social--text'>Be the first to hear  about our offers and announcements.</p>
                        <input className='footer-social--email' placeholder='email'></input>
                    </div>
                    <div className='footer-contact'>
                        <h1 className='footer-title'>Contact us</h1>
                        <p className='footer-social--text'>Questions? We got answers. Try us</p>
                        <a href='/' className='footer-social--emailUs' style={{marginTop: '3rem'}}>Email us</a>
                    </div>
                </div>
            </div>
            <div className='footer-credits'>
                    <p className='credits'>Copyright © - Auto Sport Market @Ipatov Robert</p>
            </div>
        </div>
    )
}

export default Footer
