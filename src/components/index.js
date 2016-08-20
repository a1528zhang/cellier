import React, { Component } from 'react'
import Nav from './public/nav'
import Footer from './public/footer'


class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>

        )
    }
}



export default App;
