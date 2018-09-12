import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => (
    <div>
      <h1>Trending This Week</h1>
      {
        props.imgPaths.map((imgPath, index) =>
          imgPath ?
            <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} key={index} /> :
            <img src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg" key={index} width={500} />
        )
      }
    </div>
);

const mapStateToProps = (state) => ({
  imgPaths: state.search.imgPaths
});

export default connect(mapStateToProps)(Main);