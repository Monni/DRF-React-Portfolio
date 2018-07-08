import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import MainStyles from "./css/main.css";
import MainMenu from "./Menu.js";
import ImageLoader from "./ImageLoader.js";

 
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

				{/*Large image on the left, split content*/}
				<div className={MainStyles.wrapper_split_image}>
					<ImageLoader className={MainStyles.wrapper_split_image} imageUrl={this.state.imageUrl}/>
				</div>

				{/*Content on the right, split content*/}
				<div className={MainStyles.wrapper_split_content}>

					<MainMenu/>

					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/experience" component={Resume}/>
						<Route path="/projects" component={Projects}/>
					</div>

					<footer className={ MainStyles.footer }>
						<div className={ MainStyles.container_fluid +" "+ MainStyles.container_custom }>
							<div className={ MainStyles.row }>

								<div className={ MainStyles.col_md_7}>
									<p>© 2018 Miika Avela. All rights reserved</p>
								</div>

								<div className={ MainStyles.col_md_5}>
									<ul className={MainStyles.social_list}>
										<li>
											<a href="#">
												<FontAwesome name="twitter"/>
											</a>
										</li>
										<li>
											<a href="#">
												<FontAwesome name="facebook"/>
											</a>
										</li>
										<li>
											<a href="#">
												<FontAwesome name="linkedin"/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>

    );
  }
};
