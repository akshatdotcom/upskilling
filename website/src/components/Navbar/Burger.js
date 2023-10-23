import React, { Component } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faXmark } from '@fortawesome/free-solid-svg-icons'

class Burger extends Component {

    // Props: state, handleClick
    render() {
        return (
            <div className="menu-icon" onClick={this.props.handleClick}>
                {
                    this.props.state.clicked ?
                        <FontAwesomeIcon icon={faXmark}  /> :
                        <FontAwesomeIcon icon={faBars} />
                }
            </div>
        )
    }
}

export default Burger