import React, { Component } from "react";
import MainStyles from "./css/main.css";
import styles from "./css/home.css";
 
export default class Home extends Component {
    render() {
        return (
            <div>
                {/* Hello Text */}
                <section className={ styles.module }>
                    <div className={ MainStyles.container_fluid +" "+ MainStyles.container_custom }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_12 }>
                                <h1>Hello, I am Miika Avela<br />Software developer.</h1>
                                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer
                                    elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.
                                    Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personal Details */}
                <section className={ styles.module }>
                    <div className={ MainStyles.container_fluid +" "+ MainStyles.container_custom }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_4 }>
                                <h6>Personal Info.</h6>
                            </div>
                            <div className={ MainStyles.col_sm_8 }>
                                <ul>
                                    <li>Name: Miika Avela</li>
                                    <li>Birthdate: September 23, 1990</li>
                                    <li>Address: TBA</li>
                                    <li>Phone: TBA</li>
                                    <li>E-mail: <a href="#">TBA</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
