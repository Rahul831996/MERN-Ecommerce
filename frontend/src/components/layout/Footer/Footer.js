import React from 'react'
import "./Footer.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
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
      <a href="http://instagram.com/rahulthe_coder"><InstagramIcon/></a>
      <a href="http://facebook.com/rahul.margale.585"><FacebookIcon/></a>
      <a href="http://twitter.com/margale_rahul"><TwitterIcon/></a>
      <a href="http://linkedin.com/rahul-margale-eng"><LinkedInIcon/></a>
    </div>
  </footer>
  )
}

export default Footer;