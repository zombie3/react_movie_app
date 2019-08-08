import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({ isLoading : false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return <div>
      {isLoading? 'Loading... @,.@' : 'Loading is done. # 3 #'}
    </div>;
  }
}

export default App;
