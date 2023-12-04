import React, { Component } from 'react';
import './Navbar.css';
import Title from './Title';
import Burger from './Burger';
import MenuItems from './MenuItems/MenuItems';
import { Button } from './Button/Button';
import SignUpPage from './signuppage'; // Correct import path
import './stylingSignUp.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <Title />
          <Burger state={this.state} handleClick={this.handleClick} />
          <MenuItems state={this.state} handleClick={this.handleClick} />
          <Button onClick={this.handleClick}>Sign Up</Button>
        </nav>
        
        {this.state.clicked && <SignUpPage />}
      </div>
    );
  }
}

export default Navbar;
