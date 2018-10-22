import React from "react";
import MainStyles from "./css/main.css";
import styles from "./css/resume.css";
import ResumeLoader from "./dataloaders/resume";
import PageLoader from "./dataloaders/PageLoader"
import API from "./api/Base";
import { groupBy } from "lodash";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: [],
            work: [],
            education: [],
            certificates: [],
            other: [],
            error: false
        };
        this.handleSuccess.bind(this);
        this.handleError.bind(this);
    }
    // TODO check initial states. Looks oddish.

    handleSplitImageChange(image) {
        this.props.onSplitImageChange(image);
    }

    componentDidMount(){
        // TODO need to create CareerLoader and parse errors there. This component only to utilise loaders
        API.get('career').then(response => this.handleSuccess(response)
        ).catch(error => this.handleError(error))
    }

    handleSuccess(response) {
        console.log(groupBy(response.data, 'type'));
        this.setState({ response: groupBy(response.data, 'type') });
        /*response.data.map(data => {
            let dataArray = this.state[data.type].slice();
            dataArray.push(data);
            this.setState({ [data.type]: dataArray});
        });*/
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
        return (
            <div>
                {/* TODO Handle this error gracefully */}
                {this.state.error && <p>I have failed in life. Or just an API error</p>}

                {/* Page Content */}
                <PageLoader pageName='resume' onSplitImageChange={this.handleSplitImageChange.bind(this)}/>

                {/* Experience */}
                { Object.keys(this.state.response).map(category => (
                    <ResumeLoader data={this.state.response[category]} title={category}/>
                ))}

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

