import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

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
        <header className="masthead pa1">
            <div className="logo">
                <h1 className="site-name s1">
                    <Link to="/" className="slink">
                        <span>Ugly</span> <span>Bunnies</span>
                    </Link>
                </h1>
            </div>
            <a href="#" className="pa" id="menuControl" onClick={topnav}>
                <i className="icon-menu">&#xf0c9;</i>
            </a>
        </header>

        <nav className="topnav m0">
            <ul id="topNav" className="menu">
                <li>
                    <Link to="/" onClick={topnav}>Home</Link>
                </li>
                <li>
                    <Link to="/web-projects" onClick={topnav}>Web Projects</Link>
                </li>
            </ul>
        </nav>
        <main className="content">
            <Routes />
        </main>
        <footer className="pa2">
            <p>Copyright &copy; 2001-2018 Michael Wong. All Rights Reserved.</p>
        </footer>
    </div>
  </Router>
)
