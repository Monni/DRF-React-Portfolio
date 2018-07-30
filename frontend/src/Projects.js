import React, { Component } from "react";
import PageLoader from "./dataloaders/PageLoader";
import ProjectsLoader from "./dataloaders/Projects";

// TODO handle displaying error
export default class Projects extends Component {
    render() {
        return (
            <div>
                <PageLoader pageName='projects'/>
                <ProjectsLoader/>
            </div>
    );
  }
};
