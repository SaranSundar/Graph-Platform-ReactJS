import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from './Home';
import Subpage from './Subpage';

const firstChild = ({children}) => (
    React.Children.toArray(children)[0] || null
);

class App extends Component {

    constructor(props){
        super(props);
        this.state = {years: -1, risk: -1, target: -1, page: 'home', index: 0};
        this.receieveCalcInfo = this.receieveCalcInfo.bind(this);
    }

    receieveCalcInfo(yearsNew, riskNew, targetNew, pageNew, indexNew, sliderNew){
        this.setState({years: yearsNew, risk: riskNew, target: targetNew, page: pageNew, index: indexNew, slider: sliderNew});
        //alert(yearsNew + " " + riskNew + " " + targetNew + " " + pageNew);
    }

    render() {
        return (
            <div>
                {/*<div className="TopBar">*/}
                {/*<Link to="/">Home</Link>*/}
                {/*/!*<Link to="/subpage">Subpage</Link>*!/*/}
                {/*</div>*/}

                <section className="hero is-primary">
                    <div className="container has-text-centered">
                        <h1 className="content is-size-1 is-size-3-touch">SC Stock Calculator</h1>
                    </div>
                </section>

                <Switch>
                    <Route
                        exact
                        path="/"
                        children={({match, ...rest}) => (
                            <TransitionGroup component={firstChild}>
                                {match && <Home {...rest} updateInfo={this.receieveCalcInfo}/>}
                            </TransitionGroup>
                        )}
                    />
                    <Route
                        path="/subpage"
                        children={({match, ...rest}) => (
                            <TransitionGroup component={firstChild}>
                                {match && <Subpage {...rest} stats={this.state}/>}
                            </TransitionGroup>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
