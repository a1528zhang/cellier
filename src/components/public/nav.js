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
                                <span>Media</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/About">
                                <span>About</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Nav;
