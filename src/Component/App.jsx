import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Page2 from './Page2';
import People from './People';
import Movies from './Movies';
import Demographics from './Demographics';



class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <button id='btn1'>
                    <Link to="/home">Go Home</Link>
                    </button>
                    <button>
                    <Link to="/page2">View Films</Link>
                    </button>
                    <button>
                    <Link to="/people">View People</Link>
                    </button>
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