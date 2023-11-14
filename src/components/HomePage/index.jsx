import React, { Component } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Slider from './Slider'

class HomePage extends Component {
    render() {
        return (
            <div className="max-w-[1200px] mx-auto">
                <Header />
                <Slider />
                <Footer />
            </div>
        )
    }
}

export default HomePage
