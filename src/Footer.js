import React, { Component } from 'react'
import { Router, Link } from 'react-static'


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <footer className="site-footer pa2 bxb">
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
                <p className="s8">Copyright &copy; 2001-{ this.state.date.getFullYear() } Michael Wong. All Rights Reserved.</p>
            </footer>
        )
    }
}
