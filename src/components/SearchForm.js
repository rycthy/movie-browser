import React from 'react';
import { connect } from 'react-redux';
import { setQuery, startSetQueryResults, setMediaType } from '../actions/search';

const SearchFrom = (props) => {
  const onQueryChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    props.setQuery(query);
  }
  const onMediaTypeChange = (e) => {
    e.preventDefault();
    const mediaType = e.target.value;
    props.setMediaType(mediaType);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    props.startSetQueryResults();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={onQueryChange}
        />
        <select onChange={onMediaTypeChange}>
          <option value='multi'>All</option>
          <option value='movie'>Movies</option>
          <option value='tv'>TV Shows</option>
          <option value='person'>People</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  startSetQueryResults: () => dispatch(startSetQueryResults()),
  setMediaType: (mediaType) => dispatch(setMediaType(mediaType))
});

export default connect(undefined, mapDispatchToProps)(SearchFrom);