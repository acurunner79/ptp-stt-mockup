import React from 'react'
import TopNav from '../Nav/TopNav'
import Footer from '../Footer/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: rgba(60,60,60,1);
  /* background-color: rgb(228, 235, 241); */
  /* background-image: url("https://res.cloudinary.com/acurunner79/image/upload/v1630468902/PathTradingPartner_LogoMarkOnly_dpkga2.png"); */
  background-size: 30% !important;
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 200%;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  /* opacity: 0.6; */
}

h1, h2, h3, h4, h5, h6{
  color: rgb(67, 121, 185);
  /* color: black; */
}

p{
  color: white;
  /* color: rgb(67, 121, 185); */
}

a, li{
  text-decoration: none !important;
  list-style: none;
  color: black;
}


`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <TopNav />
      <section>{children}</section>
      <Footer />
    </div>
  )
}

export default Layout