import React, { Component } from 'react'
import logo from './logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Title extends Component {

    render() {
        return (
            <Link to="/">
                <img className="logo" src={logo} alt="Pathlete"></img>
            </Link>
        )
    }
}

export default Title