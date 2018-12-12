import React from "react";
import API from "../api/Base";

export default class ProjectsLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: [],
            error: false
        };
        this.handleSuccess.bind(this);
        this.handleError.bind(this);
    }

    componentDidMount() {
        API.get('projects').then(response => this.handleSuccess(response).bind(this)
        ).catch(error => this.handleError(error).bind(this));
    }

    handleSuccess(response) {
        this.setState({data: response.data});
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
        return (
            <div>
                {/* TODO figure out how to dis*/}
            </div>
        )
    }
}