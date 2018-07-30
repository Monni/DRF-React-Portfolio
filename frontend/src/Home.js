import React, { Component } from "react";
import PageLoader from "./dataloaders/PageLoader";

export default class Home extends Component {
    render() {
        return (
            <div>
                <PageLoader pageName="home"/>
            </div>
        );
    }
}
