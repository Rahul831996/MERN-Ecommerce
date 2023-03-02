import React  from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo from '../../../images/logo.jpg';
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth:window.innerWidth < 656 ? 10 : 100,
  navColor1:"white",
  logoHoverSize:"10px",
  logoHoverColor:"none",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35, 0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "rgb(0, 123, 168)",
  link1Margin: "1vmax",
  profileIcon:true,
  profileIconColor: "rgb(0, 123, 168)",
  ProfileIconElement: MdAccountCircle, 
  searchIcon:true,
  searchIconColor: "rgb(0, 123, 168)",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "rgb(0, 123, 168)",
  CartIconElement:MdAddShoppingCart,
  profileIconUrl: "/login",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "3vmax",
}

const Header = () => {
  return <ReactNavbar {...options} />  ;
    
  
}

export default Header;


 