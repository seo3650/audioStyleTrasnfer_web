import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Firstpage from '../pages/Firstpage';
import Secondpage from '../pages/Secondpage';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Firstpage}/>
                    <Route exact path="/convert" component={Secondpage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;