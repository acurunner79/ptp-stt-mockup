import React from 'react'
import { Link } from 'gatsby'
import '../../styles/topnav.css'

const TopNav = () => {
  return (
    <div id="nav-container">
        <nav id="navbar">
            <ul id="nav-links">
                <Link to="/">
                    <li>Link 1</li>
                </Link>
                <Link to="/">
                    <li>Link 2</li>
                </Link>
                <Link to="/">
                    <li>Link 3</li>
                </Link>
                <Link to="/">
                    <li>Link 4</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default TopNav