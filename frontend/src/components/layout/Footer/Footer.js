import React from 'react'
import "./Footer.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";

const Footer = () => {
  return (
    <footer id="footer">
     <div className="leftFooter">
      <h4>DOWNLOAD OUR APP</h4>
      <img src={playStore} alt="playstore" />
      <img src={appStore} alt="Appstore" />
     
    </div>

    <div className="midFooter">
      <h1>ECOMMERCE.</h1>
      <p>High Quality is our first priority</p>
        <p>Made With ❤️</p>
      <p><small>Copyrights 2023 &copy; RahulMargale</small></p>
    </div>

    <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="http://instagram.com/techi_.rahul">Instagram</a>
      <a href="http://instagram.com/rahulmargale96">Facebook</a>
      <a href="http://twitter.com/margale_rahul">Twitter</a>
      <a href="http://twitter.com/margale_rahul">Linkdien</a>
    </div>
  </footer>
  )
}

export default Footer;