import React, { Component } from 'react'
import { Link } from 'react-router'


class HomePage extends Component {
    render() {
        return (
            <div className="hp-box">
                <div className="hp-text">
                    <div className="hp-text-title">Portfolio of cellier.</div>
                    <div className="hp-text-inner">
                        I’m a self-taught  product designer who's been crafting websites &<br/>
                        apps since 2015.Now, designs products, user experience, interactions<br/>
                        and brands.
                    </div>
                </div>
                <div className="hp-img">
                    <div className="hp-img-box">
                        <Link to="/DetailsPage">
                            <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                        </Link>
                    </div>
                    <div className="hp-img-box">
                        <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                    </div>
                    <div className="hp-img-box">
                        <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                    </div>
                    <div className="hp-img-box">
                        <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                    </div>
                    <div className="hp-img-box">
                        <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                    </div>
                    <div className="hp-img-box">
                        <img src="http://obhsihr83.bkt.clouddn.com/img1.png"/>
                    </div>
                    <div className="main-clear-both"></div>
                </div>
                <div className="hp-resume">
                    Read the resume
                </div>
            </div>
        )
    }
}



export default HomePage;
