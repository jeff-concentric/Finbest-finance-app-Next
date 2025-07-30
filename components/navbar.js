import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  return (
    <>
      <header className="navbar-navbar">
        <div className="navbar-desktop">
          <div className="navbar-main">
            <div className="navbar-branding">
              <Link href="/">
                <a className="navbar-link10">
                  <img
                    alt={props.brandingAlt}
                    src={props.brandingSrc}
                    className="navbar-finbest"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-links1">
              <Link href="/">
                <a className="link">{props.link1}</a>
              </Link>
              <Link href="/">
                <a className="link">{props.link2}</a>
              </Link>
              <Link href="/">
                <a className="link">{props.link3}</a>
              </Link>
              <Link href="/">
                <a className="link">{props.link4}</a>
              </Link>
            </div>
          </div>
          <div className="navbar-quick-actions">
            <Link href="/">
              <a className="link navbar-link19">Log in</a>
            </Link>
            <Link href="/">
              <a className="navbar-link20">
                <div className="navbar-sign-up-btn">
                  <span className="navbar-sign-up">Sign up</span>
                </div>
              </a>
            </Link>
            <img
              id="open-mobile-menu"
              alt={props.pastedImageAlt}
              src={props.pastedImageSrc}
              className="navbar-hamburger-menu"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile">
          <div className="navbar-top">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="navbar-icon1"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="navbar-links2">
            <Link href="/">
              <a className="navbar-link21">{props.text1}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link22">{props.text11}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link23">{props.text12}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link24">{props.text13}</a>
            </Link>
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link25">
                  <div className="navbar-btn1">
                    <span className="navbar-text1">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="navbar-link26">
                  <div className="navbar-btn2">
                    <span className="navbar-text2">{props.text1311}</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="navbar-container2">
            <Script
              html={` <script defer>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
            ></Script>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-main {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link10 {
            display: contents;
          }
          .navbar-finbest {
            width: 148px;
            height: 37px;
            text-decoration: none;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .navbar-quick-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link20 {
            display: contents;
          }
          .navbar-sign-up-btn {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .navbar-mobile {
            gap: var(--dl-layout-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 150px;
            object-fit: cover;
          }
          .navbar-icon1 {
            width: 28px;
            height: 28px;
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link21 {
            text-decoration: none;
          }
          .navbar-link22 {
            text-decoration: none;
          }
          .navbar-link23 {
            text-decoration: none;
          }
          .navbar-link24 {
            text-decoration: none;
          }
          .navbar-buttons {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .navbar-link25 {
            display: contents;
          }
          .navbar-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text1 {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link26 {
            display: contents;
          }
          .navbar-btn2 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text2 {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-container2 {
            display: contents;
          }
          @media (max-width: 991px) {
            .navbar-navbar {
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .navbar-links1 {
              display: none;
            }
            .navbar-link19 {
              display: none;
            }
            .navbar-sign-up-btn {
              display: none;
            }
            .navbar-hamburger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
            }
            .navbar-mobile {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link3: 'Prices\n',
  text1: 'Features',
  text12: 'Prices',
  link4: 'Contact\n',
  brandingSrc: '/pastedimage-cx4wqj.svg',
  link1: 'Features',
  text131: 'Log in',
  imageAlt: 'image',
  pastedImageSrc: '/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Contact',
  link2: 'How it works',
  pastedImageAlt: 'pastedImage',
  imageSrc: '/pastedimage-cx4wqj.svg',
  brandingAlt: 'pastedImage',
  text11: 'How it works',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  link4: PropTypes.string,
  brandingSrc: PropTypes.string,
  link1: PropTypes.string,
  text131: PropTypes.string,
  imageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  link2: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  brandingAlt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
