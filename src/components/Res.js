import React, { Component } from "react";
export default class App extends Component {
    render() {
        return (
            <div className="Res" >
             {this.props.result}
            </div>
        );
    }
}
