import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
// import { Link } from 'react-router-dom';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoaded: false,
            movie: {},
        }
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((movie => {
                // console.log(movie)
                this.setState({
                    movie: movie

                })
            }));
    }

    render () {
        return (
            
            <div key={this.state.movie.id}>
                <h1>{this.state.movie.title}, {this.state.movie.release_date}</h1>
                <h5>Director:{this.state.movie.director} | Producer:{this.state.movie.producer}</h5>
                <p>{this.state.movie.description}</p>
            </div>

            
        )
    }

}
export default Movies