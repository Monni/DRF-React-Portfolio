import React from "react";
import Spinner from "./Spinner";
import { spinnerService } from "./spinner.service";


export default class ImageLoader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            imageLoaded: false,
            imageFailed: false
        };
        this.spinnerName = 'ImageLoader';
    }

    componentDidMount() {
        if (!this.state.imageLoaded && !spinnerService.isShowing(this.spinnerName)) {
            spinnerService.show('SplitImageSpinner')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props && !spinnerService.isShowing(this.spinnerName)) {
            spinnerService.show(this.spinnerName);
        } else if (
            prevState !== this.state && this.state.imageLoaded && spinnerService.isShowing(this.spinnerName)) {
            spinnerService.hide(this.spinnerName);
        }
    }

    handleImageLoaded() {
        this.setState({ imageLoaded: true});
    }

    handleImageFailed() {
        this.setState({ imageFailed: true });
    }

    render() {
        const { imageUrl } = this.props;
        return (
            <div>
                <img src={ imageUrl }
                     onLoad={ this.handleImageLoaded.bind(this) }
                     onError={ this.handleImageFailed.bind(this) }
                     style={ this.state.imageLoaded ? {visibility: 'visible'} : {visibility: 'hidden'}} />

                <Spinner name={ this.spinnerName } group="SplitImage">
                    <h1>Loading...</h1>
                </Spinner>
            </div>
        )
    }
}