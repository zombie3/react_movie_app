import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './movies';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    this.setState({ movies, isLoading : false });
  }

  componentDidMount() {
    this.getMovies();
  }

  paintLoading = () => {
    return <div class="loader">
      <span class="loader__text">Loading... @,.@</span>
    </div>;
  }

  paintMovie = () => {
    const { movies } = this.state;
    
    console.log(movies);

    return <div class="movies">
      <p>Loading is done. # 3 #</p>
      {  movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
    </div>;
  }

  render() {
    const { isLoading, movies } = this.state;

    return <section class="container">
      {isLoading? this.paintLoading() : this.paintMovie()}
      </section>;
  }
}

export default App;
