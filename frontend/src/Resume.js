import React from "react";
import MainStyles from "./css/main.css";
import styles from "./css/resume.css";
import ResumeLoader from "./dataloaders/resume";
import PageLoader from "./dataloaders/PageLoader"
import API from "./api/Base";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: [],
            WRK: [],
            EDU: [],
            CRT: [],
            OTH: [],
            error: false
        };
        this.handleSuccess.bind(this);
    }
    // TODO check initial states. Looks oddish.

    componentDidMount(){
        API.get('career').then(response => this.handleSuccess(response)
        ).catch(error => this.handleError(error).bind(this))
    }

    handleSuccess(response) {
        console.log(response);
        this.setState({ response: response });
        response.data.map(data => {
            let dataArray = this.state[data.type].slice();
            dataArray.push(data);
            this.setState({ [data.type]: dataArray});
        });
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
        return (
            <div>

                {/* Page Content */}
                <PageLoader pageName='resume'/>

                {/* TODO Handle this error gracefully */}
                {this.state.error && <p>I have failed in life. Or just an API error</p>}

                {/* Education */}
                <ResumeLoader data={ this.state.EDU } title={ 'education' }/>

                {/* Work Experience */}
                <ResumeLoader data={ this.state.WRK } title={ 'work' }/>

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

