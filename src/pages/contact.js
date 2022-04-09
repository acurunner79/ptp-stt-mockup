import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/contact.css'

const contact = () => {
  return (
    <Layout>
        <h1 id="contact-header">Fill Out To Subcribe</h1>
        <div id="contact-form">
            <div id="contact-card">
                <form>
                    <p className="contact-title">First Name<br/>
                        <input className="form-input"></input>
                    </p>
                    <br/>
                    <p className="contact-title">Last Name<br/>
                        <input className="form-input"></input>
                    </p>
                    <br/>
                    <p className="contact-title">Email<br/>
                        <input className="form-input"></input>
                    </p>
                    <br/>
                    
                    <br/>
                </form>
                    <button id="subscribe-button">Submit</button>
            </div>
        </div>
    </Layout>
  )
}

export default contact