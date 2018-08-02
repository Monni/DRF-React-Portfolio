import React from "react";
import PageLoader from "./dataloaders/PageLoader";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSplitImageChange(image) {
        this.props.onSplitImageChange(image);
    }

    render() {
        return (
            <div>
                <PageLoader pageName="home" onSplitImageChange={this.handleSplitImageChange.bind(this)}/>
            </div>
        );
    }
}
