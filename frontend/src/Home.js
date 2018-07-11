import React, { Component } from "react";
import PageContentLoader from "./dataloaders/PageContent";

export default class Home extends Component {
    render() {
        return (
            <div>
                <PageContentLoader pageName="home"/>
            </div>
        );
    }
}
