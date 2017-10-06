import React, {Component} from 'react';
import {Route} from "react-router-dom";
import AnimatedWrapper from "./AnimatedWrapper";
import logo from './logo.svg';
import rect1 from './img/rect1.png';
import rect2 from './img/rect2.jpg';
import rect3 from './img/rect3.jpg';

import Slider from "react-slick";

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
    className={className}
    style={{...style, display: 'block', background: 'red'}}
    onClick={onClick}
    />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
    className={className}
    style={{...style, display: 'block', background: 'green'}}
    onClick={onClick}
    />
    );
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = ({imgIndex: 0});
        this.updateImage = this.updateImage.bind(this);

    }

    updateImage(index) {
        this.setState({imgIndex: index});
        //console.log("Index: " + index);
    }

    handleClick(slider, history) {
        var i1 = Number.parseFloat(this.refs.input1.value);
        var i2 = Number.parseFloat(this.refs.input2.value);
        var i3 = Number.parseFloat(this.refs.input3.value);
        if (Number.isNaN(i1) || Number.isNaN(i2) || Number.isNaN(i3)) {
            alert("Please Fill Out ALL Fields");
        }
        else {
            history.push('subpage');
            this.props.updateInfo(this.refs.input1.value, this.refs.input2.value, this.refs.input3.value, 'subpage', this.state.imgIndex, slider);
        }
    }

    render() {
        const settings = {
            customPaging: function (i) {
                if (i === 0) {
                    return <image src={logo} className="App-logo" alt="logo" height="100px" width="100px"/>;
                }
                else if (i === 1) {
                    return <image src={rect1} className="App-logo" alt="logo" height="100px" width="100px"/>;
                }
                else if (i === 2) {
                    return <image src={rect2} className="App-logo" alt="logo" height="100px" width="100px"/>;
                }
                else if (i === 3) {
                    return <image src={rect3} className="App-logo" alt="logo" height="100px" width="100px"/>;
                }
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToShow: 1,
            draggable: false,
            slidesToScroll: 1
        };

        let slide = (
            <Slider {...settings} afterChange={this.updateImage}>
                <div><img src={logo} className="App-logo" alt="logo" height="100px" width="100px"/></div>
                <div><img src={rect1} className="App-logo" alt="logo" height="100px" width="100px"/></div>
                <div><img src={rect2} className="App-logo" alt="logo" height="100px" width="100px"/></div>
                <div><img src={rect3} className="App-logo" alt="logo" height="100px" width="100px"/></div>
            </Slider>
        );
        return (
            <div className="container" style={{marginTop: "6vh"}}>
                <div className="field">
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input ref="input1" className="input is-primary is-medium" type="text" placeholder="Enter number of years" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input ref="input2" className="input is-primary is-medium" type="text" placeholder="Enter risk %" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input ref="input3" className="input is-primary is-medium" type="text" placeholder="Enter target net worth" />
                            </div>
                        </div>
                    </div>

                    <div id="carouselHolder">
                        <div className="carousel">
                            {slide}
                        </div>
                    </div>
                </div>

                <div className="field  has-text-centered">
                    <Route render={({history}) => (
                        <button
                            className="button is-medium is-primary"
                            type='button'
                            id='button'
                            onClick={() => {
                                this.handleClick(slide, history)
                            }}
                        >Calculate</button>
                    )}/>
                </div>
            </div>
        );
    }
}

Home.displayName = 'Home';

export default AnimatedWrapper(Home);
