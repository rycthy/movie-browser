import React from 'react';
import { baseUrl } from '../utils/tmdbConfig';
// https://image.tmdb.org/t/p/w500/
export class Main extends React.Component {
  state = {
    imgPaths: []
  }
  componentDidMount() {
    fetch(baseUrl).then((res) => {
      res.json().then((data) => {
        const imgPaths = data.results.map((result) => result.poster_path);
        this.setState({ imgPaths });
      })
    });
  }
  render() {
    return (
      <div>
        <h1>Trending This Week</h1>
        {
          this.state.imgPaths.map((imgPath, index) =>
            imgPath ?
              <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} key={index} /> :
              <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" key={index} width={500} />
          )
        }
      </div>
    )
  }
}

export default Main;