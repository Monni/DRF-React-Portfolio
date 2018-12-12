import React, { Component } from "react";
import PageLoader from "./dataloaders/PageLoader";
import ProjectsLoader from "./dataloaders/Projects";

export default class Projects extends Component {

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
                <PageLoader pageName='projects' onSplitImageChange={this.handleSplitImageChange.bind(this)}/>

                {/* Grid for all projects */}
                <ProjectsLoader/>
            </div>
    );
  }
};
