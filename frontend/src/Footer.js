import React from "react";
import FontAwesome from "react-fontawesome";
import MainStyles from "./css/main.css";

export default class Footer extends React.Component {
    render() {
        return (
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
        )
    }
}