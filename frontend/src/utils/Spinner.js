import React from "react";
import { spinnerService } from '../services/spinner.service';

export default class Spinner extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
          show: this.props.hasOwnProperty('show') ? this.props.show : false
        };

        if (this.props.hasOwnProperty('spinnerService')) {
          this.spinnerService = this.props.spinnerService;
        } else {
          this.spinnerService = spinnerService;
        }

        this.spinnerService._register(this);
      }

      componentWillUnmount() {
        this.spinnerService._unregister(this);
    }

    get name() {
        return this.props.name;
    }

    get group() {
        return this.props.group;
    }

    get show() {
        return this.state.show;
    }

    set show(show) {
        this.setState({ show });
    }

    render() {
        if (this.state.show) {
            const { loadingImage } = this.props;
            return (
                <div>
                    { loadingImage && <img src={loadingImage} /> }
                    { this.props.children }
                    </div>
            );
        }
        return (
            <div/>
        );
    }
}