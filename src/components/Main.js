import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';


const Main = (props) => {
  
  return (
    <div>
      <SearchForm />
      <ResultsList />
    </div>
  );
};

export default Main;