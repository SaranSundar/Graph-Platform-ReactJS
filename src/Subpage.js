import React, {Component} from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import {Line} from 'react-chartjs-2';

class Subpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: this.props.stats.years,
            input2: this.props.stats.risk,
            input3: this.props.stats.target,
            slider: this.props.stats.slider,
            index: this.props.stats.index,
            loading: true
        };
    }

    componentWillMount() {
        setTimeout(function() { this.setState({loading: false}); }.bind(this), 3000);
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="centerAnimation">
                    <h1 style={{color: "#001f3f"}}>Calculating...Hard At Work...</h1>
                    <div id="animation">
                        <svg viewBox="0 0 124 124">
                            <polygon className="hex" fill="none" stroke="#000000"
                                     points="92,48.4575131106 92,15.542486889354095 62,2 32,15.542486889354095 32,48.4575131106"/>
                            <polygon className="hex" fill="none" stroke="#000000"
                                     points="62,94.9150262213 92,108.457513111 122,94.9150262213 122,62 92,48.4575131106"/>
                            <polygon className="hex" fill="none" stroke="#000000"
                                     points="32,48.4575131106 2,62 2,94.9150262213 32,108.457513111 62,94.9150262213"/>
                        </svg>
                    </div>
                </div>
            );
        }
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            return {
                labels: ["Field 1", "Field 2", "Field 3"],
                datasets: [{
                    label: 'Value: ',
                    data: [this.state.input1, this.state.input2, this.state.input3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            };
        };
        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        var sectionStyle = {
            backgroundImage: "url(" + this.state.slider.props.customPaging(this.state.index).props.src + ")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };
        console.log(sectionStyle.backgroundImage);
        return (
            <div className="page">
                <div className="chartInputRow" style={sectionStyle}>
                    <Line data={data} options={options} width="600" height="250"/>
                </div>
            </div>
        );
    }
}

Subpage.displayName = 'Subpage';

export default AnimatedWrapper(Subpage);
