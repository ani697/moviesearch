import React from 'react';
import './Posts.css';

const Posts = (props) => {
  return(
    <div className="Post">
        <table>
        <tbody>
              <tr>
                  <td style={{fontWeight:'bold'}}>Title</td>
                  <td>{props.Title}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Released</td>
                  <td>{props.Released}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Actors</td>
                  <td>{props.Actors}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Awards</td>
                  <td>{props.Awards}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Title</td>
                  <td>{props.Title}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Country</td>
                  <td>{props.Country}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Language</td>
                  <td>{props.Language}</td>
              </tr>
              <tr>
                  <td style={{fontWeight:'bold'}}>Plot</td>
                  <td>{props.Plot}</td>
              </tr>
          </tbody>
        </table>
    </div>
  )
};

export default Posts;
