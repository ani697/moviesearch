import React, {Component} from 'react';
import axios from 'axios';
import Posts from '../Components/Posts/Posts';
import './FoundPage.css';

class FoundPage extends Component{
  state = {
    posts:[]
  }
  componentDidMount(){
    const URL = 'http://www.omdbapi.com/?t='+this.props.match.params.Title+'&apikey=1cd359d4';
    axios.get(URL)
        .then(response => {

            this.setState({posts:response.data});
            console.log(this.state.posts);
            console.log("THE ID IS "+this.state.posts.imdbID);
        });
  }

  render(){
    console.log(this.props.match.params.Title)
//    const Address = 'http://www.omdbapi.com/?i=tt'+this.props.match.params.Title+'&apikey=1cd359d4';
    const Address = 'http://img.omdbapi.com/?i='+this.state.posts.imdbID+'&h=600&apikey=1cd359d4'
    return(
      <div className="Detail" >
        <h1>{this.state.posts.Title}</h1>
        <img src={Address} alt="Movie Poster" width="250" height="250"/>
        <Posts Title={this.state.posts.Title} Released={this.state.posts.Released} Actors={this.state.posts.Actors} Awards={this.state.posts.Awards} Country={this.state.posts.Country} Director={this.state.posts.Director} Language={this.state.posts.Language} Plot={this.state.posts.Plot} />
      </div>
    );
  }
}

export default FoundPage;
