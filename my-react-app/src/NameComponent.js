
import React, { Component } from 'react';
class NameComponent extends Component{
    render(){
        return(
            <div>
                <p>{this.props.myName} is Awsome!</p>
            </div>
        );
    }
}
export default NameComponent;

