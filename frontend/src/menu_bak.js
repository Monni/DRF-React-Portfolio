import React from "react";
import styles from "./css/menu.css";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      open: true
    }));
  }

  render() {
	var className = this.state.isToggleOn ? "showMenuBtn-open" : "showMenuBtn";
    return (
	<div className={ className } onClick={this.handleClick}>
		<span></span>
		<span></span>
		<span></span>
	{className}
        {this.state.isToggleOn ? 'ON' : 'OFF'}
	</div>
    );
  }
}

