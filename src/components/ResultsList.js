import React from 'react';
import { connect } from 'react-redux';

const ResultsList = (props) => (
  <div>
    {
      props.results.length === 0 ? (
        <p>No results found</p>
      ) : (
          props.results.map((result, index) =>
            result.poster_path ?
              <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} key={index} /> :
              result.profile_path ?
                <img src={`https://image.tmdb.org/t/p/w500${result.profile_path}`} key={index} /> :
                <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" key={index} width={500} />
          )
        )
    }
  </div>
)

const mapStateToProps = (state) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(ResultsList);