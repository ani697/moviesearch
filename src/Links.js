import React, {Component} from 'react';
import SearchPage from './SearchPage/SearchPage';
import FoundPage from './FoundPage/FoundPage';
import {Route} from 'react-router-dom';

class Links extends Component{
  render(){
    return(
      <div>
        <Route  path='/' exact component={SearchPage} />
        <Route  path='/lookformovie.herokuapp.com/FoundPage/:Title'   exact component={FoundPage} />
      </div>
    );
  }
}

export default Links;
