import React, { Component } from 'react'
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './components/index'
import HomePage from './components/homepage/homepage'
import DetailsPage from './components/detailpage/detailspage'
import About from './components/about/about'
import Media from './components/media/media'

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/DetailsPage" component={DetailsPage}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Media" component={Media}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;
