import React, {Component} from 'react';
import Buttons from "./Buttons";

class TextField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            prev_value: '',
            initial: true,
        };

        this.textFieldStateChange = this.textFieldStateChange.bind(this);
    }

    textFieldStateChange(event){
        console.log("Button pressed")
        this.setState({
            prev_value: event.target.value,
            value: event.target.value,
        }, () => {
            this.props.obj(this.state.value);
            // this.props.obj(this.state.prev_value);
        });
    }

    buttonPressed = input => {
        if (input === 'C') {
            this.setState({
                value: ''
            }, () => {
                console.log('===== Textfield cleared =====');
            });
        }
        else {
            let addString = this.state.value + input;
            this.setState({
                value: addString
            }, () => {
                console.log('===== Button pressed, Textfield State changed =====');
                console.log(this.state.value)
            });
        }
    };

    render() {
        return (
            <div>
                <label> <input type="text" value={this.state.value} onChange={(event) => this.textFieldStateChange(event)} /> </label>
                <br/>
                <Buttons value="7" obj={this.buttonPressed}/>
                <Buttons value="8" obj={this.buttonPressed}/>
                <Buttons value="9" obj={this.buttonPressed}/>
                <br/>
                <Buttons value="4" obj={this.buttonPressed}/>
                <Buttons value="5" obj={this.buttonPressed}/>
                <Buttons value="6" obj={this.buttonPressed}/>
                <br/>
                <Buttons value="1" obj={this.buttonPressed}/>
                <Buttons value="2" obj={this.buttonPressed}/>
                <Buttons value="3" obj={this.buttonPressed}/>
                <br/>
                <Buttons value="0" obj={this.buttonPressed}/>
                <Buttons value="." obj={this.buttonPressed}/>
                <Buttons value="C" obj={this.buttonPressed}/>
            </div>
        );
    }
}

export default TextField;

