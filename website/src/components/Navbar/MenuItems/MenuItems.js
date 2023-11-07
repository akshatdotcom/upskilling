import React, { Component } from 'react'
import { MenuItemsData } from './MenuItemsData'

class MenuItems extends Component {
    render() {
        return (
            <ul className={this.props.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItemsData.map((item) => {
                    return (
                        <li key={item.title}>
                            <a className={item.cName}
                                href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MenuItems