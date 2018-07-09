import React from "react";
import API from "./base";
import MainStyles from "../css/main.css";
import styles from "../css/resume.css";

export default class ResumeLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false
        }
    }

    componentDidMount(){
        const { type } = this.props; // string, career or education

        API.get(type).then(response => this.handleSuccess(response).bind(this)
        ).catch(error => this.handleError(error).bind(this))
    }

    handleSuccess(response) {
        console.log(response);
        this.setState({data: response.data});
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    formatTitle(str){
        return str.charAt(0).toUpperCase() + str.slice(1) + '.';
    }

    render() {
        return (
            <section className={ MainStyles.module }>
                <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ')}>
                    <div className={ MainStyles.row }>
                        <div className={ MainStyles.col_sm_4 }>
                            <h6>{this.state.data && this.formatTitle(this.props.type)}</h6>
                        </div>

                        <div className={ MainStyles.col_sm_8 }>
                            <ul className={ styles.resumeInfo }>
                                {this.state.data.map(((data, index) => {
                                    console.log(data);
                                    if(data.type === this.props.subType)
                                        return <li key={index}>
                                            <h6 className={ styles.resumeTitle }>{data.name}</h6>
                                            <h6 className={ styles.resumeMeta }>{ data.period_start } - { data.period_end }</h6>
                                            <p>{data.description}</p>
                                        </li>
                                }))}
                                {!this.state.data.length > 0 && this.state.error && <p>I have failed in life. Or just an API error</p>}
                                {console.log(this.state.data.length)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}