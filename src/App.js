import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './app.css'

export default () => (
    <Router>
        <div>
            <header>
                <div className="logo">
                <h1><span>Ugly</span> <span>Bunnies</span></h1>
            </div>
            </header>
            <nav className="topnav mtn">
                <ul id="topNav" className="menu">
                    <li className="menuItem1"><Link to="/">Home</Link></li>
                    <li className="menuItem2"><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main className="content">
                <Routes />
            </main>
        </div>
    </Router>
)
