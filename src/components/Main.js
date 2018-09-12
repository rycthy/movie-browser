import React from 'react';
import { connect } from 'react-redux';
import { setQuery, startSetQueryResults } from '../actions/search';

const Main = (props) => {
  const onQueryChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    props.setQuery(query);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    props.startSetQueryResults();
  }
  return (
    <div>
      <div>
      <h1>Trending This Week</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Search..."
          onChange={onQueryChange}
        />
        <button>submit</button>
      </form>
      </div>
      {
        props.results.map((result, index) =>
          result.poster_path ?
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} key={index} /> :
            <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" key={index} width={500} />
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  results: state.search.results
});
const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  startSetQueryResults: () => dispatch(startSetQueryResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);