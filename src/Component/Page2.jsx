// THIS IS THE FILMS LIST FILE
import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import { Link } from 'react-router-dom';

class Page2 extends Component {
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
        // const { films } = this.state;
        return (
            <div>
                <h2>Studio Ghibli Filmography</h2>
                <ul>
                        {this.state.films.map(films => (
                            <li key ={films.id}>
                                {films.title}, {films.release_date}
                                <div>
                                    <Link to={`/films/${films.id}`}>
                                        <button>More Info</button>
                                    </Link>
                                </div>
                            </li>
                        ))}

                
                </ul>
                
            </div>
        );
    }
}
            
    export default Page2