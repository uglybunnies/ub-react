import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
import Header from './Header'
import Footer from './Footer'

import './app.scss'

function topnav(e) {
    let target = e.target;
    if (target.matches('#menuControl')) {
        e.preventDefault();
    }
    const mNav = document.getElementById('topNav');
    mNav.classList.toggle('show');
    mNav.style.height = (mNav.classList.contains('show')) ? mNav.scrollHeight + "px" : 0;
}
export default () => (
  <Router>
    <div>
        <Header />
        <main className="content">
            <Routes />
        </main>
        <Footer />
    </div>
  </Router>
)
