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
                {/* <h2>Characters</h2>
                <ul>
                    {this.state.cast.map(cast => (
                        <li key={cast.id}>
                            {cast.name}
                            <div>

                                <Link to={`/people/${cast.id}`}>
                                    <button className="btn btn-secondary">More Info</button>
                                </Link>
                            
                            </div>
                        </li>
                    ))}
                </ul> */}
                
                <h2>Film Characters</h2>
                {this.state.cast.map(cast => (
                    <React.Fragment key={cast.id}>
                        <div className="col-sm-6 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{cast.name}</h5>
                                    <Link to={`/people/${cast.id}`}>
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
export default People;