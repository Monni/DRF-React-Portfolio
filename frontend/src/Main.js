import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";
import MainStyles from "./css/main.css";
import MainMenu from "./Menu.js";
import ImageLoader from "./dataloaders/ImageLoader.js";

 
export default class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            imageUrl: null
        };
    }

	render() {
		return (
			<div className={MainStyles.wrapper}>

				{/* Main Image. TODO check classNames.*/}
				<div className={MainStyles.wrapper_split_image}>
					<ImageLoader className={MainStyles.wrapper_split_image} imageUrl={this.state.imageUrl}/>
				</div>

				{/* Content */}
				<div className={MainStyles.wrapper_split_content}>
					<MainMenu/>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/experience" component={Resume}/>
						<Route path="/projects" component={Projects}/>
					</div>

					{/* Footer */}
					<Footer/>
				</div>
			</div>

    );
  }
};
