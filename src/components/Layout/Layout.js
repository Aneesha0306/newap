import React, { Fragment } from 'react'
import Routers from '../routers/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
function Layout() {
  return (
    <Router>
        <Fragment>
          <Header/>
          <div>
              <Routers/>
          </div>
          <Footer/>
          </Fragment>
    </Router>
  )
}

export default Layout
