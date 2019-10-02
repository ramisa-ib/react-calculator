import React, {Component} from 'react';
import TextField from "./TextField";
import Operators from "./Operators";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            input: '',
            prev_value: '',
            result: '',
        };
    }

    changeNum1 = number1 => {
        this.setState({
            input: number1
        }, () => {
            console.log ('===== num1 =====');
            console.log (this.state.num1)
        });
    };

    changeNum2 = number2 => {
        this.setState({
            num2: number2
        }, () => {
            console.log('===== num2 =====');
            console.log(this.state.num2)
        });
    };

    changeTextArea = input => {
        this.setState({
            input: input,
            prev_value: input,
        }, () => {
            console.log('===== Previous Value =====');
            console.log(this.state.prev_value);
            console.log(this.state.value);
        });
    };

    // setPrevValue = prev_value => {
    //     this.setState({
    //         prev_value: prev_value,
    //         value: ''
    //     }, () => {
    //         console.log(this.state.prev_value);
    //     });
    // };

    render() {
        return (
            <form>
                <TextField obj={this.changeTextArea} onChange={(event) => this.changeTextArea(event)}/>

                <Operators value='+' obj={this.changeTextArea} />
                <Operators value='-' obj={this.changeTextArea} num1={this.state.num1} />
                <Operators value='*' obj={this.changeTextArea} num1={this.state.num1} />
                <Operators value='/' obj={this.changeTextArea} num1={this.state.num1} />
            </form>
        );
    }
}

export default Calculator;
