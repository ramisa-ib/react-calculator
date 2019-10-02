import React, {Component} from 'react';

class Operators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props
        };
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();
        let result;
        if (this.props.value === '+') {
            console.log('Adding!');
            result = parseFloat(this.props.value) + parseFloat(5.5);
            console.log(result);
        } else if (this.props.value === '-') {
            console.log('Subtracting!');
            result = parseFloat(this.props.num1) - parseFloat(this.props.num2);
            console.log(result);
        } else if (this.props.value === '*') {
            console.log('Multiplying!');
            result = parseFloat(this.props.num1) * parseFloat(this.props.num2);
            console.log(result);
        } else if (this.props.value === '/') {
            console.log('Dividing!');
            result = parseFloat(this.props.num1) / parseFloat(this.props.num2);
            console.log(result);
        } else {
            result = '';
        }

        this.setState({
            value: result,
        }, () => {
            console.log("Operator value: "+ this.props.obj(this.state.value));
            this.props.obj(this.state.value);
        });
    };

    render() {
        return (
            <input type="submit" value={this.props.value} onClick={this.handleSubmit}/>
        );
    }
}

export default Operators;
