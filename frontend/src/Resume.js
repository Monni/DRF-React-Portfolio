import React from "react";
import MainStyles from "./css/main.css";
import styles from "./css/resume.css";
import ResumeLoader from "./dataloaders/ResumeLoader";
import PageLoader from "./dataloaders/PageLoader"
import { groupBy } from "lodash";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSplitImageChange(image) {
        this.props.onSplitImageChange(image);
    }

    render() {
        return (
            <div>

                {/* Page Content */}
                <PageLoader pageName='resume' onSplitImageChange={this.handleSplitImageChange.bind(this)}/>

                {/* Education & Experience */}
                <ResumeLoader/>

                {/* TODO here fetch skills as buzzwords from LinkedIn. (Or DB? Do I need a table for that?) */}
                {/* Suggested flow: make a call to backend, which in turn calls for LinkedIn API and caches the result for a day or some. */}
                <section className={ MainStyles.module }>
                    <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_4 }>
                                <h6>Buzzwords</h6>
                                <p>According to LinkedIn, I know some of these words.</p>
                            </div>

                            {/* TODO this needs to be a dynamic component */}

                            <div className={ MainStyles.col_sm_8 }>
                                <ul className={ styles.resumeInfo }>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Python</h6>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Django Rest Framework</h6>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>ReactJs</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

