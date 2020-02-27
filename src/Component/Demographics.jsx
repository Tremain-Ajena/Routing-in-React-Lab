import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
// import { Link } from 'react-router-dom';

class Demographics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facts: {},
        }
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((facts => {
                // console.log(movie)
                this.setState({
                    facts: facts

                })
            }));
    }

    render () {
        return (
            
            <div key={this.state.facts.id}>
                {/* <h1>{this.state.facts.name}, {this.state.facts.age}</h1> */}
                {/* <h5>C:{this.state.facts.name} | Producer:{this.state.facts.producer}</h5> */}
        
                    {/* <div>
                    {this.state.facts.gender}
                    </div>
                    <div>
                    {this.state.facts.eye_color}
                    </div>
                    <div>
                    {this.state.facts.hair_color}
                    </div> */}
            
                <React.Fragment>
                    <div className="card">
                        <h1 className="card-header">{this.state.facts.name}</h1>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.facts.gender} | Age: {this.state.facts.age}</h5>
                            <p className="card-text ">
                                Eye Color: {this.state.facts.eye_color}
                            </p>
                            <p className="card-text ">
                                Hair Color: {this.state.facts.hair_color}
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            </div>

            
        )
    }

}
export default Demographics