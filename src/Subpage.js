import React, {Component} from 'react';
import AnimatedWrapper from "./AnimatedWrapper";

class Subpage extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className="page">
                <h1>Subpage</h1>
                <p>{this.props.stats.years}</p>
            </div>
        );
    }
}

Subpage.displayName = 'Subpage';

export default AnimatedWrapper(Subpage);
