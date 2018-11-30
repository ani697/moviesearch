import React, {Component} from 'react';
import SearchPage from './SearchPage/SearchPage';
import FoundPage from './FoundPage/FoundPage';
import {Route,Switch} from 'react-router-dom';

class Links extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route  path='//' exact  component={SearchPage} />
          <Route  path='/FoundPage/:Title' component={FoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Links;
