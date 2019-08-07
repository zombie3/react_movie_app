import React from 'react';
import PropTypes from 'prop-types';

// URL : https://www.vegetables.co.nz/vegetables-a-z/
const vegetables = [
  {
    id: 1,
    name: 'Tomato',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/tomatoes.png',
    rating: 5
  },
  {
    id: 2,
    name: 'Potato',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/potatoes.png',
    rating: 2.3
  },
  {
    id: 3,
    name: 'Broccoli',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/broccoli.png',
    rating: 3
  },
  {
    id: 4,
    name: 'Lettuce',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/lettuce.png',
  },
];

function Food({ name, image, rating }) {
  return <div>
    <h2>{name} juice</h2>
    <h3>Rating : {rating}</h3>
    <img src={image} alt={name} />
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      <h1>Hello World -</h1>
        {vegetables.map(vege => (
          <Food key={vege.id} name={vege.name} image={vege.image} rating={vege.rating}/>
        ))}
    </div>
  );
}

export default App;
