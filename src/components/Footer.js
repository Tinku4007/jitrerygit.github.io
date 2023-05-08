import React from 'react'

const Footer = () => {
  return (
    <>
     <footer>
                <div className="footer">
                    <div className="container">
                        <div className="footer-logo" style={{ textAlign: 'center' }}>
                            <img src="images/jitterygit-logo-black.png" alt="" width="20%" />
                        </div>
                        <div className="form-heading " style={{ textAlign: 'center' }}>
                            <p>SUBSCRIBE YOUR EMAIL</p>
                        </div>
                        <div className="exclusive-signup footer-form">
                            <form action="">
                                <input type="email" name="" id="" placeholder="Type your email..."
                                    style={{ borderColor: '#fff', backgroundColor: '#f1f1f1' }} />
                                <input type="submit" name="" id="" value="SIGN ME UP" />
                            </form>
                        </div>
                        <div className="footer-links">
                            <div className="footer-content home-footer">
                                <h1 style={{ marginBottom: "15px" }}>OUR BRANDS</h1>
                                <ul>
                                    <li><a href="">ROBOTRYX</a></li>
                                    <li><a href="">DINOMANIACS</a></li>
                                    <li><a href="">BUY WITH PRIME</a></li>
                                </ul>
                            </div>
                            <div className="footer-content home-footer">
                                <h1 style={{ marginBottom: "15px" }}>USERS</h1>
                                <ul>
                                    <li><a href="">PRIVACY POLICY</a></li>
                                    <li><a href="">SHIPPING & RETURNS</a></li>
                                </ul>
                            </div>
                            <div className="footer-content home-footer">
                                <h1 style={{ marginBottom: "15px" }}>SUPPORT</h1>
                                <ul>
                                    <li><a href="">EMAIL US</a></li>
                                    <li><a href="">CALL US</a></li>
                                    <li><a href="">WHOLESALE</a></li>
                                </ul>
                            </div>
                            <div className="footer-content home-footer">
                                <h1 style={{ marginBottom: "15px" }}>ABOUT US</h1>
                                <ul>
                                    <li><a href="">CONTACT</a></li>
                                    <li><a href="">WHOLESALE</a></li>
                                </ul>
                            </div>
                            <div className="footer-content home-footer">
                                <h1 style={{ marginBottom: "15px" }}>FOLLOW US</h1>
                                <ul>
                                    <li><a href="">FACEBOOK</a></li>
                                    <li><a href="">INSTAGRAM</a></li>
                                    <li><a href="">YOUTUBE</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all_right">
                    <div className="container">
                        <div className="merge-caption">
                            <div className="allright_caption">
                                <h3>ALL RIGHTS RESERVED © 2023 - JITTERYGIT</h3>
                            </div>
                            <div className="allright_social-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className="allright-img">
                                <img src="images/logo-artefacto.png" alt="" width="125px" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer;