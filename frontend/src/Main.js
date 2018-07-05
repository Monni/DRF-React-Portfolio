import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./css/template.css";
import MainStyles from "./css/main.css";
 
class Main extends Component {
	render() {
		return (

			<div className={MainStyles.wrapper}>

				{/*Large image on the left, split content*/}
				<div className={MainStyles.wrapper_split_image}>
				<h3 className={MainStyles.asd}>Foo</h3>
					<button className={MainStyles.button}>Vanity Button</button>
				</div>

				{/*Content on the right, split content*/}
				<div className={MainStyles.wrapper_split_content}>
					<footer className="footer">
						<div className="container-fluid container-custom">
							<div className="row">
								<div className="col-md-7">
									<p>© 2018 Miika Avela. All rights reserved</p>
								</div>
								<div className="col-md-5">
									<ul className={MainStyles.social_list}>
										<li><a href="#"><i className="fa fa-twitter"/></a></li>
										<li><a href="#"><i className="fa fa-facebook"/></a></li>
										<li><a href="#"><i className="fa fa-google-plus"/></a></li>
										<li><a href="#"><i className="fa fa-linkedin"/></a></li>
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
