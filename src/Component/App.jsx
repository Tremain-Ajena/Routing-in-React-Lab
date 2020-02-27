import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Page2 from './Page2';
import People from './People';
import Movies from './Movies';
import Demographics from './Demographics';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="d-flex justify-content-center my-5">
                    <button className="btn btn-dark" id="btn1">
                    <Link to="/home">Go Home</Link>
                    </button>
                    <button className="btn btn-dark mx-3" id="btn2">
                    <Link to="/page2">View Films</Link>
                    </button>
                    <button className="btn btn-dark" id="btn3">
                    <Link to="/people">View People</Link>
                    </button>

                    </div>
                    <Switch>
                        <Route exact path = "/home" component={Home} />
                        <Route exact path = "/page2" component={Page2} />
                        <Route exact path = "/films/:id" component={Movies} />
                        <Route exact path = "/people" component={People} />
                        <Route exact path = "/people/:id" component={Demographics} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default App;