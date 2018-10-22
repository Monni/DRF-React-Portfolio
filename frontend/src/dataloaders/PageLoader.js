import React from "react";
import API from "../api/Base";
import MainStyles from "../css/main.css";

export default class PageLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            response: {}
        };
        this.handleSuccess.bind(this);
        this.handleError.bind(this);
        this.handleSplitImageChange.bind(this);
    }

    componentDidMount() {
        const { pageName } = this.props;
        API.get('pages/' + pageName.toUpperCase()).then(response => this.handleSuccess(response)
        ).catch(error => this.handleError(error))
    }

    handleSuccess(response) {
        console.log(response);
        this.setState({ response: response.data });
        document.title = "Miika Avela - " + response.data.page_name.charAt(0) + response.data.page_name.slice(1).toLowerCase();
        if ('header' in response.data) {
            this.handleSplitImageChange(response.data.header)
        }
    }

    handleError(error) {
        this.setState({error: error});
    }

    handleSplitImageChange(header) {
        if ('image' in header) {
            this.props.onSplitImageChange(header.image);
        }
    }

    render() {
        if (this.state.error) {
            return(
                <div>
                    <section className={ MainStyles.module }>
                        <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                            <div className={ MainStyles.row }>
                                <div className={ MainStyles.col_sm_12}>
                                    <h1>
                                        Whoops.
                                    </h1>
                                    <p>
                                        I have failed in life. Or just an API error I'm probably not aware of.
                                    </p>
                                    <p>
                                        {this.state.error.toString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
        return (
            <div>
                {this.state.response.header &&
                    <section className={ MainStyles.module }>
                        <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                            <div className={ MainStyles.row }>
                                <div className={ MainStyles.col_sm_12 }>
                                    <h1>{ this.state.response.header.title }</h1>
                                    <p>{ this.state.response.header.content }</p>
                                </div>
                            </div>
                        </div>
                    </section>}
                {this.state.response.content && this.state.response.content.sort((a, b) => a.display_order > b.display_order).map(((data, index) =>
                    <section key={index} className={ MainStyles.module }>
                        <div className={ [MainStyles.container_fluid, MainStyles.container_custom].join(' ') }>
                            <div className={ MainStyles.row }>
                                <div className={ MainStyles.col_sm_12 }>
                                    <h1>{ data.title }</h1>
                                    <p>{ data.content }</p>
                                </div>
                            </div>
                        </div>
                    </section>))}
            </div>
        )
    }
}