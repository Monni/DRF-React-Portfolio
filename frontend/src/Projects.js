import React, { Component } from "react";
import PageContentLoader from "./dataloaders/PageContent";
import ProjectsLoader from "./dataloaders/Projects";

// TODO handle displaying error
export default class Projects extends Component {
    render() {
        return (
            <div>
                <PageContentLoader pageName='projects'/>
                <ProjectsLoader/>
            </div>
    );
  }
};
