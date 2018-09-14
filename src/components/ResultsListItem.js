import React from 'react';
import { imageNotFound } from '../utils/tmdbConfig';

const ResultsListItem = (props) => (
  <div>
    {
      props.title ?
        <div>
          <h2>{props.title}</h2>
          <h2>{props.release_date}</h2>
        </div> :
        <div>
          <h2>{props.name}</h2>
        </div>
    }
    {
      props.poster_path ?
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} /> :
        props.profile_path ?
          <img src={`https://image.tmdb.org/t/p/w500${props.profile_path}`} /> :
          <img src={imageNotFound} width={500} />
    }
  </div>
);

export default ResultsListItem;