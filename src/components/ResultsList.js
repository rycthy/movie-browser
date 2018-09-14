import React from 'react';
import { connect } from 'react-redux';
import ResultsListItem from './ResultsListItem'

const ResultsList = (props) => (
  <div>
    {
      props.results.length === 0 ? (
        <p>No results found</p>
      ) : (
          props.results.map((result) =>
            <ResultsListItem key={result.id} {...result}/>
          )
        )
    }
  </div>
)

const mapStateToProps = (state) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(ResultsList);

// result.poster_path ?
//               <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} key={result.id} /> :
//               result.profile_path ?
//                 <img src={`https://image.tmdb.org/t/p/w500${result.profile_path}`} key={result.id} /> :
//                 <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" key={result.id} width={500} />