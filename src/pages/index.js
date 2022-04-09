import * as React from "react"
import Layout from "../components/Layout/Layout"
import '../styles/home.css'


const IndexPage = () => {
  return (
    <Layout>
      <h1 className="header-text">How Stock Think Tank Works...</h1>
      <div id="upper-container">
        <img src="https://res.cloudinary.com/acurunner79/image/upload/v1649530469/d5aa5bca-5_108d0co000000000000028_qm05sn.png" alt="bob-1"/>
        <div id="paragraph-container">
          <p className="upper-cont-par">
            <span>This is your chance to have a Wall Street pro alerting you on what stocks to buy, and when to sell them.</span>
          </p>
          <p className="upper-cont-par">
            <span>
            The stocks actually making him and his followers’ REAL money… not the “paid for click” trades the financial news media and marketers are forcing down our throats.
            </span>
          </p>
          <p className="upper-cont-par">
            <span>
            For less than $10 monthly, Bob will show you his research and tell you exactly what stocks to buy and when to sell. He even will provide you with weekly video updates!
            </span>
          </p>
        </div>
        <div id="steps-card">
          <div id="steps-list">
            <p className="steps-par"><span>1.  Bob Sends You What Stocks to Buy</span></p>
            <p className="steps-par"><span>2.  You Buy Them</span></p>
            <p className="steps-par"><span>3.  Wait for Bob to Tell You When To Sell </span></p>
          </div>
          <div id="lower-paragraph">
            <p className="lower-par"><span>Bob typically recommends a new trade every week on average. Some weeks more, some weeks less.</span></p>
            <p className="lower-par"><span>The best part is… You can invest as little or as much as you would like. Whether it’s a few hundred dollars, or a few thousand dollars.</span></p>
            <p className="lower-par"><span>If you’re ready to be exposed to the truth within investing and trading. Not investing “secrets” or “tricks,” but real knowledge in the realm of the trading industry…</span></p>
          </div>
        </div>
      </div>
      <div id="mid-container">
        <h2 id="mid-header">Then click below to get started for less than the cost of a Netflix subscription today. (100% Satisfaction Guarantee)</h2>
        <img src="https://res.cloudinary.com/acurunner79/image/upload/v1649535709/0e8d37af-1yearmoneybackguarantee-1_10p00ci000000000000028_di81hy.png" alt="gaurantee"/>
      </div>
        <button className="buttons"><a id="try-button-link" href="https">Try it RISK-FREE Today!</a></button>
    </Layout>
  )
}

export default IndexPage
