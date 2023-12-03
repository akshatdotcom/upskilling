import React, { Component } from 'react'
import { MenuItemsData } from './MenuItemsData'
import { Link } from 'react-router-dom'

class MenuItems extends Component {
    render() {
        return (
            <ul className={this.props.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItemsData.map((item) => {
                    return (
                        <li key={item.title}>
                            <Link className={item.cName}
                                to={item.url}
                                onClick={this.props.handleClick}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MenuItems