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
            <React.Fragment>
                <header className="masthead">
                    <div className="logo pa1">
                        <h1 className="site-name word-mark">
                            <Link to="/" className="slink">
                                <span>Ugly</span> <span>Bunnies</span>
                            </Link>
                        </h1>
                    </div>
                </header>
                <Topnav isOpen={ this.state.showMenu } expandMenu={ this.expandMenu } />
            </React.Fragment>
        );
    }
}
