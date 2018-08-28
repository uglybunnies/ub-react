import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './Header'
import Footer from './Footer'

import './app.scss'

const App = () => (
  <Router>
    <React.Fragment>
          <Header />
          <main className="content">
              <Routes />
          </main>
          <Footer />
    </React.Fragment>
  </Router>
)

export default hot(module)(App)
