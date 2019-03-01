import React from 'react';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="smurf-info">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p><strong>{props.age}</strong> smurf years old</p>
      </div>

      <div className="buttons">
        <span className="edit">Edit</span>
        <span className="delete">Delete</span>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

