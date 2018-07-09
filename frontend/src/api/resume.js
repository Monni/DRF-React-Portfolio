import React from "react";
import API from "./base";

export default class ResumeLoader extends React.Component {

    componentDidMount(){
        const { type } = this.props; // string, career or education

        API.get(type).then((response)=>{
            console.log(response.data);
        })
    }

    render() {
        return (
<div/>
        )
    }

}