import React, {Component} from 'react';
import FunctionalComponent from "./FunctionalComponent";

class ClassComponent extends Component {

    constructor (props){
        super(props);
        this.state = {
            message: 'NO'
        }
    }

    // stateChange(){
    //     this.setState({
    //         message: 'You can access me now'
    //     });
    //     console.log(this.state.message)
    // }

    render() {

        let names = [{ name: 'Ramisa'}, { name: 'Pramee'} , { name: 'Shaomi'}, { name: 'Maliha'}, { name: 'Shoshi'}];

        return (
            <div>
                { names.map(item =>
                    <FunctionalComponent name={item.name}/>
                )}
                <FunctionalComponent state_message={this.state.message}/>
            </div>
        );
    }
}

export default ClassComponent;
