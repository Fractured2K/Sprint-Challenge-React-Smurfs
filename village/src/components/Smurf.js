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
        <span className="edit" onClick={(e) => props.setUpdatedSmurf(e, props)}>Edit</span>
        <span className="delete" onClick={() => props.deleteSmurf(props.id)}>Delete</span>
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

