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
        return (
            <div>
                {/* <h2>Studio Ghibli Filmography</h2>
                <ul>
                        {this.state.films.map(films => (
                            <li key ={films.id}>
                                {films.title}, {films.release_date}
                                <div>
                                    <Link to={`/films/${films.id}`}>
                                        <button className="btn btn-secondary">More Info</button>
                                    </Link>
                                </div>
                            </li>
                        ))}
                </ul> */}
                
                <h2>Studio Ghibli Filmography</h2>
                <img src="" alt=""></img>
                {this.state.films.map(films => (
                    <React.Fragment key={films.id}>
                            <div className="col-sm-6 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{films.title}, {films.release_date}</h5>
                                        <Link to={`/films/${films.id}`}>
                                            <button className="btn btn-secondary">More Info</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </React.Fragment>

                ))}
                
            </div>
        );
    }
}
            
    export default Page2