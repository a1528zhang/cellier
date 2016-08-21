import React, { Component } from 'react'
import { Link } from 'react-router'
import { cutUrl , underScroll } from '../utils/Utils'
import { HP_DATA } from '../data/hpData'

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

        //主页内容载入动画
        let HpDataList = HP_DATA;
        this.HpImgBoxAnimate(HpDataList);

        //到底部事件监听
        window.addEventListener('scroll',
            ()=>{underScroll(()=>{this.hpBottomPart()})}
        );

    }

    hpBottomPart() {
        $(".hp-resume").animate({
            opacity: '1'
        }, "500");
    }


    HpImgBoxAnimate(dataId) {
        dataId.map(function (data) {
                let animateList = data.workId;
                return (
                    $("#hp-img-box" + animateList).delay(200 + animateList * 100).animate({
                        opacity: '1'
                    }, "500")
                )
            }
        )
    }

    render() {
        //列表渲染
        let hpDatalist = HP_DATA;
        let doHpDataList = hpDatalist.map(function (data) {
            return (
                <div className="hp-img-box" key={data.workId} id={"hp-img-box"+data.workId}>
                    <Link to="/DetailsPage">
                        <img src={data.workImg}/>
                    </Link>
                </div>
            )
        })

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
                    { doHpDataList }
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
