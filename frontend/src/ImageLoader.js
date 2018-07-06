import React from "react";
import Spinner from "./Spinner";
import { spinnerService } from "./spinner.service";
import loadingGif from "./assets/img/loader.gif";
import styles from "./css/imageloader.css";


export default class ImageLoader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            imageLoaded: false,
            imageFailed: false
        };
        this.spinnerName = 'ImageLoader';
        this.initialState = this.state;
    }

    componentDidMount() {
        if (!this.state.imageLoaded && !spinnerService.isShowing(this.spinnerName)) {
            spinnerService.show('SplitImageSpinner')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props && !spinnerService.isShowing(this.spinnerName)) {
            spinnerService.show(this.spinnerName);
            this.setState(this.initialState);
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
            <div className={styles.imageloader}>
                <Spinner className={styles.spinner} name={ this.spinnerName } group="SplitImage" loadingImage={ loadingGif }/>
                <img src={ imageUrl }
                     onLoad={ this.handleImageLoaded.bind(this) }
                     onError={ this.handleImageFailed.bind(this) }
                     style={ this.state.imageLoaded ? {display: 'block'} : {display: 'none'}} />
            </div>
        )
    }
}