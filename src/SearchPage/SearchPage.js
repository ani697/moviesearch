import React, {Component} from 'react';
import axios from 'axios';
import './SearchPage.css';
import MovieEngine from '../Components/MovieEngine/MovieEngine.js';
import {Link} from 'react-router-dom';
class SearchPage extends Component {
  state = {
    movie : null,
    flag: 0
  }
  handleChange(event){
    this.setState({movie:event.target.value});
  }

  handleSubmit(event){
    const URL = 'https://www.omdbapi.com/?t='+this.state.movie+'&apikey=1cd359d4';
    axios.get(URL)
        .then(response => {
          if(response.data.Title !== undefined)
          {
              this.setState({flag:1});
              //console.log(response.data.Released)
          }
          else {
            this.setState({flag:2});
          }
        });
  }

  render(){
    let post = null;
    if(this.state.flag===1)
    {
      post = <div><label style={{color:'#cc9900' ,fontWeight: 'bold',fontSize:20}}>We Found The Movie </label><Link to={'/FoundPage/'+this.state.movie} target='_blank'><button style={{marginLeft:6}}>Let's Go</button></Link></div>;
    }
    else if(this.state.flag===2)
    {
      post = <div>
                  <label style={{color:'#cc9900' ,fontWeight: 'bold',fontSize:20}}>
                        Movie NOT FOUND!
                  </label>
            </div>;
    }
    return(
        <div  className="SearhPage">
                <MovieEngine getName={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
                {/*<Link to={'/'+this.state.Summary.Title} target='_blank'><button>Let's Go</button></Link>*/}
                {post}
        </div>
    );
  }
}

export default SearchPage;
