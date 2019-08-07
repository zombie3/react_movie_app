import React from 'react';

// URL : https://www.vegetables.co.nz/vegetables-a-z/
const vegetables = [
  {
    id: 1,
    name: 'Tomato',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/tomatoes.png'
  },
  {
    id: 2,
    name: 'Potato',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/potatoes.png'
  },
  {
    id: 3,
    name: 'Broccoli',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/broccoli.png'
  },
  {
    id: 4,
    name: 'Lettuce',
    image: 'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/lettuce.png'
  },
];

function Food({ name, image }) {
  return <div>
    <h2>{name} juice</h2>
    <img src={image} alt={name} />
  </div>;
}

function App() {
  return (
    <div>
      <h1>Hello World -</h1>
        {vegetables.map(vege => (
          <Food key={vege.id} name={vege.name} image={vege.image} />
        ))}
    </div>
  );
}

export default App;
