import React from 'react';

const ResultsListItem = (props) => (
  <div>
    {
      props.poster_path ?
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} /> :
        props.profile_path ?
          <img src={`https://image.tmdb.org/t/p/w500${props.profile_path}`} /> :
          <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" width={500} />

    }
  </div>
);

export default ResultsListItem;