import React from "react";
import MainStyles from "./css/main.css";
import styles from "./css/resume.css";
import ResumeLoader from "./api/resume";

export default class Resume extends React.Component {

    render() {
        return (
            <div>

                {/* Page Title */}
                <section className={ MainStyles.module }>
                    <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_12 }>
                                <h1>Education & Work Experience.</h1>
                                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit
                                    seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip
                                    veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <ResumeLoader type='education' subType='EDU'/>

                {/* Work Experience */}
                <ResumeLoader type='career' subType='WORK'/>

                {/* TODO here fetch skills as buzzwords from LinkedIn. (Or DB? Do I need a table for that?) */}
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

