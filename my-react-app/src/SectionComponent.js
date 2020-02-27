import React, { Component } from 'react';
import KennComponent from "./KennComponent";
import HamidaComponent from "./HamidaComponent";
import NameComponent from "./NameComponent";
class SectionComponent extends Component{
    render(){
        return(
            <div>
                <h1>Code School</h1>
                <NameComponent myName={"Hamida"}> </NameComponent>

            </div>
        );
    }
}
export default SectionComponent;