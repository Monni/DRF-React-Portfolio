import React from "react";
import MainStyles from "../css/main.css";
import styles from "../css/resume.css";
import API from "../api/Base";
import {groupBy} from "lodash";

export default class ResumeLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: [],
            error: false
        };
        this.handleSuccess.bind(this);
        this.handleError.bind(this);
    }

    componentDidMount(){
        API.get('career').then(response => this.handleSuccess(response)
        ).catch(error => this.handleError(error))
    }

    handleSuccess(response) {
        console.log(groupBy(response.data, 'type'));
        this.setState({ response: groupBy(response.data, 'type') });
    }

    handleError(error) {
        this.setState({error: error.toString()});
    }

    formatTitle(str){
        return str.charAt(0).toUpperCase() + str.slice(1) + '.';
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <div>
                    <section className={ MainStyles.module }>
                        <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                            <div className={ MainStyles.row }>
                                <div className={ MainStyles.col_sm_12}>
                                    <p>
                                        I have failed in life. Or just an API error I'm probably not aware of.
                                    </p>
                                    <p>
                                        {this.state.error.toString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            )
        }
        return (
            <div>
                { Object.keys(this.state.response).map(category => (
                    <section className={ MainStyles.module }>
                        <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ')}>
                            <div className={ MainStyles.row }>
                                <div className={ MainStyles.col_sm_4 }>
                                    <h6>
                                        { this.state.response[category].length > 0 && this.formatTitle(category) }
                                    </h6>
                                </div>

                                <div className={ MainStyles.col_sm_8 }>
                                    <ul className={ styles.resumeInfo }>
                                        {this.state.response[category].map(((data, index) =>
                                            <li key={index}>
                                                <h6 className={ styles.resumeTitle }>
                                                    {data.name}
                                                </h6>
                                                <h6 className={ styles.resumeMeta }>
                                                    { data.location }, { data.start_date } - { data.end_date }
                                                </h6>
                                                <p>
                                                    {data.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        )
    }
}