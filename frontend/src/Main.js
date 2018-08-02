import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";
import MainStyles from "./css/main.css";
import MainMenu from "./Menu.js";
import ImageLoader from "./dataloaders/ImageLoader.js";

 
export default class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            imageUrl: null
        };
    }

    handleSplitImageChange(imageUrl) {
    	this.setState({ imageUrl: imageUrl });
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
						<Route
							exact path="/"
							render={ (props) => <Home {...props} onSplitImageChange={this.handleSplitImageChange.bind(this)}/> }
						/>
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
