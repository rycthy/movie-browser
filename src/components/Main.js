import React from 'react';
import Header from './Header';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';


const Main = (props) => {
  
  return (
    <div>
      <Header />
      <SearchForm />
      <ResultsList />
    </div>
  );
};

export default Main;