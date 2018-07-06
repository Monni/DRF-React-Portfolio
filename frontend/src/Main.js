import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import MainStyles from "./css/main.css";
import MainMenu from "./Menu.js";

 
class Main extends Component {
	render() {
		return (
			<div className={MainStyles.wrapper}>

				{/*Large image on the left, split content*/}
				<div className={MainStyles.wrapper_split_image}>
					<h3>Foo</h3>
				</div>

				{/*Content on the right, split content*/}
				<div className={MainStyles.wrapper_split_content}>

					<MainMenu/>

					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={Projects}/>
					</div>

					<footer className={ MainStyles.footer }>
						<div className={ MainStyles.container_fluid }>
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
}
 
export default Main;
