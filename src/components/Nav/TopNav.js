import React from 'react'
import { Link } from 'gatsby'
import '../../styles/topnav.css'

const TopNav = () => {
  return (
    <div id="nav-container">
        <nav id="navbar">
            <img id="nav-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1649537989/10dc09d0-whiterealdailylogo_105v010000000000000028_jbzpof.png" alt="nav-logo"/>
            <ul id="nav-links">
                <Link to="/">
                    <li className="li-nav-links">Home</li>
                </Link>
                <Link to="/">
                    <li className="li-nav-links">Link 2</li>
                </Link>
                <Link to="/">
                    <li className="li-nav-links">Link 3</li>
                </Link>
                <Link to="/contact">
                    <li className="li-nav-links">Subrcribe</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default TopNav