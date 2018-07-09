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

                <div>
                    <ResumeLoader type='education' subType='EDU'/>
                </div>

                {/* Education */}
                <section className={ MainStyles.module }>
                    <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_4 }>
                                <h6>Education.</h6>
                            </div>

                            {/* TODO this needs to be a dynamic component fetching info from DB */}



                            <div className={ MainStyles.col_sm_8 }>
                                <ul className={ styles.resumeInfo }>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Academy of Art University</h6>
                                        <h6 className={ styles.resumeMeta }>2001 - 2004</h6>
                                        <p>Academy of Art University's School of Web Design & New Media is the
                                            intersection between traditional design and new technologies.</p>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Academy of Art University</h6>
                                        <h6 className={ styles.resumeMeta }>2001 - 2004</h6>
                                        <p>Information technology (IT) workers can be found in many types of
                                            organizations. According to the U.S. Department of Labor, "In the modern
                                            workplace, it is imperative that Information Technology (IT) works both
                                            effectively and reliably.</p>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Academy of Art University</h6>
                                        <h6 className={ styles.resumeMeta }>2001 - 2004</h6>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                                            consequat.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section className={ MainStyles.module }>
                    <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                        <div className={ MainStyles.row }>
                            <div className={ MainStyles.col_sm_4 }>
                                <h6>Work Experience.</h6>
                            </div>

                            {/* TODO this needs to be a dynamic component fetching info from DB */}

                            <div className={ MainStyles.col_sm_8 }>
                                <ul className={ styles.resumeInfo }>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Software Engineer - Apple</h6>
                                        <h6 className={ styles.resumeMeta }>2001 - 2004</h6>
                                        <p>Academy of Art University's School of Web Design & New Media is the
                                            intersection between traditional design and new technologies.</p>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Creative Direction - Twitter</h6>
                                        <h6 className={ styles.resumeMeta }>2005 - 2008</h6>
                                        <p>Information technology (IT) workers can be found in many types of
                                            organizations. According to the U.S. Department of Labor, "In the modern
                                            workplace, it is imperative that Information Technology (IT) works both
                                            effectively and reliably.</p>
                                    </li>
                                    <li>
                                        <h6 className={ styles.resumeTitle }>Front-end Developer – </h6>
                                        <h6 className={ styles.resumeMeta }>2009 - 2012</h6>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                                            consequat.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

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

