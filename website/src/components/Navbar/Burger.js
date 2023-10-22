import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class Burger extends Component {

    // Props: state, handleClick
    render() {
        return (
            <div className="menu-icon" onClick={this.props.handleClick}>
                {
                    this.props.state.clicked ?
                    <FontAwesomeIcon icon={faTimes} /> :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
        )
    }
}

export default Burger