import React, { Component } from 'react'

class EventBinder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBinder
