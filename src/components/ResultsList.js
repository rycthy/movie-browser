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
            <ResultsListItem key={result.id} {...result} />
          )
        )
    }
  </div>
)

const mapStateToProps = (state) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(ResultsList);
