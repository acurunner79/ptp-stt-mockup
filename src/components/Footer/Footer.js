import React from 'react'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <img id="footer-logo" src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_268/v1649537989/10dc09d0-whiterealdailylogo_105v010000000000000028_jbzpof.png" alt="footer-logo"/>
      <ul id="footer-links">
        <li className="links-in-footer">Privacy Policy</li>
        <li className="links-in-footer">Terms of Use</li>
        <li className="links-in-footer">Disclaimer</li>
        <li className="links-in-footer">Contact Us</li>
      </ul>
    </footer>
  )
}

export default Footer