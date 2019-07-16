import React, { Component } from 'react'
import { Router, Link } from 'react-static'

export default class Topnav extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <nav className="topnav m0">
                    <ul id="topNav" className="menu m0 p0">
                        <li className="m0 mr2">
                            <Link to="/" onClick={ this.props.expandMenu }>Home</Link>
                        </li>
                        <li className="m0 mr2">
                            <Link to="/web-projects" onClick={ this.props.expandMenu }>Web Projects</Link>
                        </li>
                        <li className="m0 mr2">
                            <Link to="/about" onClick={ this.props.expandMenu }>About Ugly Bunnies</Link>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
