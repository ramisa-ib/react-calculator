import React, {Component} from 'react';
import ClassComponent from "./ClassComponent";

class FunctionalComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            initial: true,
        }
         this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            initial: !this.state.initial },() => {
            // stateChange();
            }


        );
    }

    render() {
            return (
                <div>
                    {this.state.initial && <h4> Hello {this.props.name}!</h4>}
                    {!this.state.initial && <h4> Good Bye {this.props.name}!</h4>}
                    <button onClick={this.clickHandler}>Click me</button>
                </div>
            );

    }
}

export default FunctionalComponent;
