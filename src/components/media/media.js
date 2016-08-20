import React, { Component } from 'react'
import { cutUrl } from '../utils/stringUtils'

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
            </div>
        )
    }
}



export default Media;
