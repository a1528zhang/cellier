import React, { Component } from 'react'
import { Link } from 'react-router'
import { cutUrl} from '../utils/stringUtils'

class HomePage extends Component {


    componentDidMount() {
        //导航栏变色
        let originalUrl = window.location.href;
        let getMyRouter = cutUrl(originalUrl);

        if (getMyRouter == '') {
            $('#nav-portfolio-menu-id').attr(
                'class', 'nav-portfolio-menu-active'
            );
            $('#nav-about-menu-id').attr(
                'class', 'nav-about-menu'
            );
            $('#nav-media-menu-id').attr(
                'class', 'nav-media-menu'
            );
        } else {
            console.log('获取地址栏错误');
        }


        //载入动画
        $(".hp-text-title").animate({
            opacity: '1',
            marginLeft: '0px'
        }, "500");
        $(".hp-text-inner").delay(200).animate({
            opacity: '0.3',
            marginLeft: '0px'
        }, "500");
    }

    render() {
        return (
            <div className="hp-box">
                <div className="hp-text">
                    <div className="hp-text-title">Portfolio of cellier.</div>
                    <div className="hp-text-inner">
                        I’m a self-taught product designer who's been crafting websites &<br/>
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
