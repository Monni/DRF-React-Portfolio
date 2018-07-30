import React from "react";
import API from "../api/Base";
import MainStyles from "../css/main.css";

export default class PageLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            response: {}
        }
    }

    componentDidMount() {
        const { pageName } = this.props;
        API.get('pages/' + pageName.toUpperCase()).then(response => this.handleSuccess(response).bind(this)
        ).catch(error => this.handleError(error).bind(this))
    }

    handleSuccess(response) {
        console.log(response);
        this.setState({ response: response.data });
        document.title = "Miika Avela - " + response.data.page_name.charAt(0) + response.data.page_name.slice(1).toLowerCase();
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
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