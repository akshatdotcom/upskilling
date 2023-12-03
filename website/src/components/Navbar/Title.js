import React, { Component } from 'react'
import logo from './logo.svg'
import './Navbar.css'

class Title extends Component {

    render() {
        return (
            <img className="logo" src={logo} alt="Pathlete"></img>
        )
    }
}

export default Title