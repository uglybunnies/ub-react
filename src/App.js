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
        <header className="masthead">
            <div className="logo pa1">
                <h1 className="site-name word-mark">
                    <Link to="/" className="slink">
                        <span>Ugly</span> <span>Bunnies</span>
                    </Link>
                </h1>
            </div>
            <a href="#" className="pa" id="menuControl" onClick={topnav} title="Click to open menu">
                <i className="icon-menu"></i>
            </a>
        </header>

        <nav className="topnav m0">
            <ul id="topNav" className="menu">
                <li>
                    <Link to="/web-projects" onClick={topnav}>Web Projects</Link>
                </li>
                <li>
                    <Link to="/about" onClick={topnav}>About Ugly Bunnies</Link>
                </li>
            </ul>
        </nav>
        <main className="content">
            <Routes />
        </main>
        <footer className="site-footer pa2">
            <section>
                <ul className="inline-list site-links m0 p0">
                    <li className="m0 p0">
                        <a href="/web-projects">Web Projects</a>
                    </li>
                    <li className="m0 p0">
                        <a href="/about">About Ugly Bunnies</a>
                    </li>
                </ul>
            </section>
            <p className="s8">Copyright &copy; 2001-2018 Michael Wong. All Rights Reserved.</p>
        </footer>
    </div>
  </Router>
)
