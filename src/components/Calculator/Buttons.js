import React, {Component} from 'react';

class Buttons extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

    writeInputValue = event => {
        console.log("Button pressed")
        this.setState({
            value: event.target.value,
        }, () => {
            console.log(this.state.value);
            this.props.obj(this.state.value);
        });
    };

    render() {
        return (
            <input type="button" value={this.props.value} onClick={(event) => this.writeInputValue(event)}/>
        );
    }
}

export default Buttons;
