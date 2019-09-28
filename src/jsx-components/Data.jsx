import React, { Component } from 'react';
import '../css-components/Data.css';
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: "",
            json: {},
            isData: false
        }
    }

    handleChange = event => {
        this.setState({ sign: event.target.value })
    }
    getData = () => {
        this.setState({
            isData: true
        });
        const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => { this.setState({ json }); });
    }
    refresh = () => {
        this.setState({
            isData: false
        });
    }
    render() {
        return (
            <div className="wrapper">
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                {(this.state.isData) &&
                    <div className="Output">
                        <h3>Horoscope for {this.state.sign}</h3>
                        Current Date: {this.state.json.current_date}
                        <p>{this.state.json.description}</p>
                        <h4>{this.state.json.mood}</h4>
                    </div>
                }
                <input type="text" placeholder="Enter your Sign Here" value={this.state.value} onChange={this.handleChange} />
                <button className="glow glow-on-hover" onClick={this.getData} type="button">Enter</button>
                <button className="glow glow-on-hover" onClick={this.refresh} type="button">Refresh</button>
            </div>
        );
    }
}

export default Data;