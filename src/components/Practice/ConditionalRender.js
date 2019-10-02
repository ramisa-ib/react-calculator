import React, { Component } from 'react'

class ConditionalRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Conditional Render Page',
            initial: true
        };

        this.clickHandler = this.clickHandler.bind(this)
    }

    text = () => {
        if(this.state.initial) {
            return "Goodbye"
        }

        return "Conditional Render Page";
    };

    clickHandler() {
        this.setState({
            message: this.text(),
            initial: !this.state.initial,
        });
    }

    render() {
        console.log("hi");
        if (this.state.initial) {
            return (
                <div>
                    <h2>{this.state.message}</h2>
                    <button onClick = {this.clickHandler}>Click me</button>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h2>{this.state.message}</h2>
                    <button onClick={this.clickHandler}>Click me</button>
                </div>
            );
        }

    }
}

export default ConditionalRender
