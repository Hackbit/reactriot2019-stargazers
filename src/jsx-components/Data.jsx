import React, { Component } from 'react';
import '../css-components/Data.css';
import ReactLoading from 'react-loading';

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
        // this.setState({

        // });
        const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => {
                this.setState({ json, isData: true});
                console.log(json)
            });
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
                <div  className="GettingData">
                    {(this.state.isData) ? (
                        <div className="Output">
                            <h1>Horoscope for {this.state.sign}</h1>
                            Current Date: {this.state.json.current_date}
                            <p >{this.state.json.description}</p>
                            <h4>Mood: {this.state.json.mood}</h4>
                        </div>
                    ) :
                        (
                            <ReactLoading type={"balls"} color={"pink"} height={'20%'} width={'20%'} />
                        )}</div>
                <div>
                    {(this.state.isData) ?
                        (<button className="glow glow-on-hover" onClick={this.refresh} type="button">Refresh</button>) :
                        (<div className="Condition"><input autofocus type="text" placeholder="Enter your Sign Here" value={this.state.sign} onChange={this.handleChange} />
                            <button className="glow glow-on-hover" onClick={this.getData} type="button">Enter</button></div>)
                    }
                </div>
            </div>
        );
    }
}

export default Data;