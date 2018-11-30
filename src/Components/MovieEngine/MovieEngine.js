import React , {Component} from 'react';
import './MovieEngine.css'
//import {Link} from 'react-router-dom';

class MovieEngine extends Component{
  render()
  {
      return(
              <div className="Engine">
                    <h1>Movie Time</h1>
                    <span><input id={this.props.getSign?"NoText":"text"}  type='text' value={this.props.movie} placeholder="Search Your Favorite Movie" onChange={this.props.getName} /><br/></span>
                    <input id="submit" type="submit" value="SEARCH" onClick={this.props.handleSubmit}/><br/>
              </div>);
  }
}

export default MovieEngine;
