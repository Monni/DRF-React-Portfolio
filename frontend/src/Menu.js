import React from 'react';
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '20px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export default class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.setState({isOpen: false})
  }

  render () {
    return (
      <Menu isOpen={ this.state.isOpen } styles={ styles } right width="50%">
          <NavLink to={"/"} onClick={ this.handleClick }><i className="fa fa-fw fa-star-o" /><span>Home</span></NavLink>
          <NavLink to={"/projects"} onClick={ this.handleClick }><i className="fa fa-fw fa-mortar-board" /><span>Projects</span></NavLink>
      </Menu>
    );
  }
}

