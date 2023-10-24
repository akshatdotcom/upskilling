import React, { Component } from 'react'
import './Navbar.css'
import Title from './Title'
import Burger from './Burger'
import MenuItems from './MenuItems/MenuItems'
import { Button } from './Button/Button'

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar">
                <Title />
                <Burger state={this.state} handleClick={this.handleClick} />
                <MenuItems state={this.state} handleClick={this.handleClick} />
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar