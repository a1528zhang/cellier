import React, { Component } from 'react'
import { cutUrl } from '../utils/Utils'

class Media extends Component {

    componentDidMount(){
        //导航栏变色
        let originalUrl  = window.location.href;
        let getMyRouter = cutUrl(originalUrl);

        if( getMyRouter == 'Media'){
            $('#nav-portfolio-menu-id').attr(
                'class','nav-portfolio-menu'
            );
            $('#nav-about-menu-id').attr(
                'class','nav-about-menu'
            );
            $('#nav-media-menu-id').attr(
                'class','nav-media-menu-active'
            );
        }else {
            console.log('获取地址栏错误');
        }

        $(".md-box-title").animate({
            opacity: '1',
            paddingLeft: '0px'
        }, "500");
        $(".md-box-text").delay(200).animate({
            opacity: '0.3',
            paddingLeft: '0px'
        }, "500");
        $(".md-box-two").delay(300).animate({
            opacity: '1',
            paddingLeft: '0px'
        }, "500");
        $(".md-link-btn").delay(400).animate({
            opacity: '1',
            paddingLeft: '0px'
        }, "500");
        $(".md-box-three-title").delay(400).animate({
            opacity: '0.3',
            paddingLeft: '0px'
        }, "500");
        $(".md-box-three-inner").delay(500).animate({
            opacity: '1',
            paddingLeft: '0px'
        }, "500");

    }


    render() {
        return (
            <div className="md-box">
                <div className="md-box-one">
                    <div className="md-box-title">Media</div>
                    <div className="md-box-text">
                        I really like living on the internet,It take me to know about the world<br/>
                        far away from me. You can find me below or search “cellier” in many <br/>
                        other social medias.
                    </div>
                </div>

                <div className="md-box-two">
                    <div className="md-box-1">
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                    </div>
                    <div className="md-box-1">
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                    </div>
                    <div className="md-box-1">
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                    </div>
                    <div className="md-box-1">
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                        <div className="md-box-imgbox">
                            <img src="http://obhsihr83.bkt.clouddn.com/media.svg"/>
                        </div>
                    </div>
                    <div className="main-clear-both"></div>
                </div>
                <div className="md-link-btn">
                    Mailto: cellier@mail.com
                </div>
                <div className="md-box-three-title">
                    Featured Project
                </div>
                <div className="md-box-three-inner">
                    NaoNao real girl morning call app.<br/>
                    →
                </div>
            </div>
        )
    }
}



export default Media;
