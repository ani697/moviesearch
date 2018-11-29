import React, {Component} from 'react';
import SearchPage from './SearchPage/SearchPage';
import FoundPage from './FoundPage/FoundPage';
import {Route} from 'react-router-dom';

class Links extends Component{
  render(){
    return(
      <div>
        <Route  path={`${process.env.PUBLIC_URL}/`} exact  component={SearchPage} />
        <Route  path={`${process.env.PUBLIC_URL}/FoundPage/:Title`} component={FoundPage} />
      </div>
    );
  }
}

export default Links;
