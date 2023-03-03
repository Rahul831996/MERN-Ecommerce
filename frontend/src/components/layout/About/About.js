import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material"; 
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ABC from "../../../images/ABC.jpg"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/rahulthe_coder";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={ABC}
              alt="Founder"
            />
            <Typography>Rahul Margale</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample webApplication made by @Rahul Margale. Only with the
              purpose to learn full Stack technology.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="http://linkedin.com/rahul-margale-eng"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="http://instagram.com/rahulthe_coder" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="http://twitter.com/margale_rahul">
                <TwitterIcon  className="twitterSvg"/>
            </a>
             <a href="http://facebook.com/rahul.margale.585">
                <FacebookIcon  className="facebookSvg"/>
             </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;