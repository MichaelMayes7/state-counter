import React from "react";

export default class Output extends React.Component {
    render() {
        return (
            <span>{this.props.count}</span>
        )
    }
}