import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
import Header from './Header'
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
        <footer className="site-footer pa2">
            <section>
                <ul className="inline-list site-links m0 p0">
                    <li className="m0 p0">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m0 p0">
                        <Link to="/web-projects">Web Projects</Link>
                    </li>
                    <li className="m0 p0">
                        <Link to="/about">About Ugly Bunnies</Link>
                    </li>
                </ul>
            </section>
            <p className="s8">Copyright &copy; 2001-2018 Michael Wong. All Rights Reserved.</p>
        </footer>
    </div>
  </Router>
)
