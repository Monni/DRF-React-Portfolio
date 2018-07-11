import React, { Component } from "react";
import API from "./api/base";
import PageContentLoader from "./dataloaders/PageContent";

// TODO handle displaying error
export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            error: false
        }
    }

    componentDidMount() {
        API.get('projects').then(response => this.handleSuccess(response).bind(this)
        ).catch(error => this.handleError(error).bind(this));
    }

    handleSuccess(response) {
        this.setState({projects: response.data})
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
        return (
            <div>
                <PageContentLoader pageName='projects'/>
            </div>
    );
  }
};
