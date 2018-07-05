import React from 'react';
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
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu styles={ styles } right width="50%">
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Home</span></a>
          <a key="1" href=""><i className="fa fa-fw fa-mortar-board" /><span>About</span></a>
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Contact</span></a>
          <a key="3" href=""><i className="fa fa-fw fa-database" /><span>Something</span></a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

