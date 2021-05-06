import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ffd.co.kr%2Fshop-constant%2F%3Fidx%3D41&psig=AOvVaw2puRSdRMOVye2iMELijIbF&ust=1620387355997000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi3_bf7tPACFQAAAAAdAAAAABAE",
  },
  {
    id:2,
    name: "ramen",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhealth.chosun.com%2Fsite%2Fdata%2Fhtml_dir%2F2020%2F09%2F07%2F2020090702907.html&psig=AOvVaw0ChytBmEW8-rbTJ4oDX3nm&ust=1620387382600000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCv68T7tPACFQAAAAAdAAAAABAD",
    rating: 4.2
  }
];

function renderFood(v) {
  console.log(v);
  return (<Food key={v.id} name={v.name} picture={v.image} rating={v.rating}/>);
}

function App() {
  return (
    <div>
      { foodILike.map(renderFood) }
    </div>
  );
}

export default App;
