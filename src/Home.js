import React, {Component} from 'react';
import {Route} from "react-router-dom";
import AnimatedWrapper from "./AnimatedWrapper";
import logo from './logo.svg';
import rect1 from './img/rect1.png';
import rect2 from './img/rect2.jpg';
import rect3 from './img/rect3.jpg';

import Slider from "react-slick";

class Home extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.updateInfo(this.refs.input1.value, this.refs.input2.value, this.refs.input3.value, 'subpage')
    }

    render() {
        const settings = {
            customPaging: function(i) {
                return <a><image src={`/rect${i+1}.png`}/></a>
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="page">
                <div className="inputRow">
                    <div id="left">
                        <input ref="input1" placeholder="Enter Number Of Years"/>
                    </div>
                    <div id="center">
                        <input ref="input2" placeholder="Enter Risk%"/>
                    </div>
                    <div id="right">
                        <input ref="input3" placeholder="Enter Target Net Worth"/>
                    </div>
                    <div>
                        <h2>Custom Paging</h2>
                        <Slider {...settings}>
                            <div><img src={logo} className="App-logo" alt="logo"/></div>
                            <div><img src={rect1} className="App-logo" alt="logo"/></div>
                            <div><img src={rect2} className="App-logo" alt="logo"/></div>
                            <div><img src={rect3} className="App-logo" alt="logo"/></div>
                        </Slider>
                    </div>
                    <div id="footer">
                        <Route render={({history}) => (
                            <button
                                type='button'
                                id='button'
                                onClick={() => {
                                    history.push('/subpage');
                                    console.log("Line2");
                                    this.handleClick()
                                }}
                            >Calculate</button>
                        )}/>
                    </div>
                </div>
            </div>
        );
    }
}

Home.displayName = 'Home';

export default AnimatedWrapper(Home);
