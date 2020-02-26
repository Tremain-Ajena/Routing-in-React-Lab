import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import { Link } from 'react-router-dom';


class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoaded: false,
            cast: [],
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/")
            .then((response) => {
                return response.json();
            })
            .then((obj => {
                console.log(obj)
                this.setState({
                    cast: obj

                })
            }));
    }
    render() {
        return (
            <div>
                <h2>Characters</h2>
                <ul>
                    {this.state.cast.map(cast => (
                        <li key={cast.id}>
                            {cast.name}
                            <div>

                                <Link to={`/people/${cast.id}`}>
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
export default People;