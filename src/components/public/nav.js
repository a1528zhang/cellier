import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <div className="nav-box">
                <div className="nav-mid-box">
                    <div className="nav-left">
                        <Link to="/">
                            <img src="http://obhsihr83.bkt.clouddn.com/logo15%C2%B0.svg"/>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div>
                            <Link to="/Media">
                                <span id="nav-media-menu-id" className="nav-media-menu">Media</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/About">
                                <span id="nav-about-menu-id" className="nav-about-menu">About</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span id="nav-portfolio-menu-id" className="nav-portfolio-menu">Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Nav;
