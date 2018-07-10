import React from "react";
import API from "../api/base";
import MainStyles from "../css/main.css";

export default class PageContentLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            response: [],
            titleData: [],
            contentData: []
        }
    }

    componentDidMount() {
        const { pageName } = this.props;
        API.get('content/' + pageName).then(response => this.handleSuccess(response).bind(this)
        ).catch(error => this.handleError(error).bind(this))
    }

    handleSuccess(response) {
        console.log(response);
        this.setState({ response: response });
        response.data.map(data => {
            if (data.type === 'TITLE') {
                this.setState({ titleData: data })
            } else if (data.type === 'CONTENT') {
                let dataArray = this.state.contentData;
                dataArray.push(data);
                this.setState({ contentData: data })
            }
        })
    }

    handleError(error) {
        console.log(error);
        this.setState({error: true});
    }

    render() {
        return (
            <div>
                {this.state.titleData.map(((data, index) =>
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
                {this.state.contentData.sort((a, b) => a.display_order < b.display_order).map(((data, index) =>
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