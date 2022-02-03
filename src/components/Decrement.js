import React from "react";

export default class Decrement extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
                -
            </button>

        );
    }
}