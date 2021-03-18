import React, { useState, useEffect } from 'react';
import "./header.scss";
import LogoWhite from "../../../static/logo-white.svg"
import LogoBlue from "../../../static/logo-blue.svg"

const Header = (prop) => {
  const [isScrollEffect, setIsScrollEffect] = useState(prop.isScrollEffect)
  const [scroll, setScroll] = useState(0);
  const [logoImageUrl, setLogoImageUrl] = useState(LogoWhite);
  const [headerColor, setHeaderColor] = useState("white")
  const [headerBGColor, setHeaderBGColor] = useState("transparent")
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
      if (scroll > (793 + 505)) {
        setHeaderColor("black")
        setHeaderBGColor("#ffffff")
        setLogoImageUrl(LogoBlue) 
      } else {
        setHeaderColor("white")
        setHeaderBGColor("transparent")
        setLogoImageUrl(LogoWhite)
      }
    };
    if(isScrollEffect) {
      document.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    } else {
      setHeaderColor("black")
      setHeaderBGColor("#ffffff")
      setLogoImageUrl(LogoBlue) 
    }
  }, [scroll]);

  return (
    <header className="header" style={{
      backgroundColor: headerBGColor,
    }}>
      <div className="logo">
        <a href="/"><img src={logoImageUrl} alt="logo"></img></a>
      </div>
      <nav className="navigation">
        <a style={{
          color: headerColor,
        }} href="/"><p className="navigation__text navigation__text--active">トップページ</p></a>
        <a style={{
          color: headerColor,
        }} href="company"><p className="navigation__text">企業案内</p></a>
        <a style={{
          color: headerColor,
        }} href="service"><p className="navigation__text">事業内容</p></a>
        <a style={{
          color: headerColor,
        }} href="recruit"><p className="navigation__text">採用情報</p></a>
        <a style={{
          color: headerColor,
        }} href="contact"><p className="navigation__text navigation__text--conversion">お問い合わせ</p></a>
      </nav>
    </header>
  )
}

export default Header

