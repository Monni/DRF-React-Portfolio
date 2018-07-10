import React from "react";
import MainStyles from "../css/main.css";
import styles from "../css/resume.css";

export default class ResumeLoader extends React.Component {

    constructor(props) {
        super(props);
    }

    formatTitle(str){
        return str.charAt(0).toUpperCase() + str.slice(1) + '.';
    }

    render() {
        const {
            title,
            data
        } = this.props;

        return (
            <section className={ MainStyles.module }>
                <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ')}>
                    <div className={ MainStyles.row }>
                        <div className={ MainStyles.col_sm_4 }>
                            <h6>{ this.state.data && this.formatTitle(title) }</h6>
                        </div>

                        <div className={ MainStyles.col_sm_8 }>
                            <ul className={ styles.resumeInfo }>
                                {data.map(((data, index) =>
                                        <li key={index}>
                                            <h6 className={ styles.resumeTitle }>{data.name}</h6>
                                            <h6 className={ styles.resumeMeta }>{ data.period_start } - { data.period_end }</h6>
                                            <p>{data.description}</p>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}