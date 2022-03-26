import React from 'react'
import TopNav from '../Nav/TopNav'

const Layout = ({ children }) => {
  return (
    <div>
        <TopNav />
        <section>{children}</section>
    </div>
  )
}

export default Layout