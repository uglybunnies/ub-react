import React, { Component } from 'react'
import { Router, Link } from 'react-static'

export default class Topnav extends Component {
    constructor(props) {
        super(props);
        this.height=0;
    }
    componentDidMount() {
        const mNav = document.getElementById('topNav');
        this.height = mNav.scrollHeight + "px";
    }
    render(){
        return (
            <React.Fragment>
                <nav className="topnav m0">
                    <ul id="topNav"
                        className={ this.props.isOpen ? 'menu show' : 'menu' }
                        style={ this.props.isOpen ? { height:this.height } : { height:0 } }
                    >
                        <li>
                            <Link to="/" onClick={ this.props.expandMenu }>Home</Link>
                        </li>
                        <li>
                            <Link to="/web-projects" onClick={ this.props.expandMenu }>Web Projects</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={ this.props.expandMenu }>About Ugly Bunnies</Link>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
