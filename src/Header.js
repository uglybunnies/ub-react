import React, { Component } from 'react';
import { Router, Link } from 'react-static';
import Topnav from './Topnav';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        }
        this.expandMenu = this.expandMenu.bind(this);
    }
    expandMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    render() {
        return(
            <div>
                <header className="masthead">
                    <div className="logo pa1">
                        <h1 className="site-name word-mark">
                            <Link to="/" className="slink">
                                <span>Ugly</span> <span>Bunnies</span>
                            </Link>
                        </h1>
                    </div>
                    <a href="#" className="pa" id="menuControl" onClick={ this.expandMenu } title="Click to open menu">
                        <i className="icon-menu"></i>
                    </a>
                </header>
                <Topnav isOpen={ this.state.showMenu } expandMenu={ this.expandMenu } />
            </div>
        );
    }
}
