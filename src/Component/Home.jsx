import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoaded: false,
            films: [],
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((response) => {
                return response.json();
            })
            .then((obj => {
                console.log(obj)
                this.setState({
                    // isLoaded: false,
                    films: obj

                })
            }));
    }

    render() {
        
        return (
            <div>
                <h1>This is the first page</h1>
                
            </div>
        );
    }
}
export default Home;