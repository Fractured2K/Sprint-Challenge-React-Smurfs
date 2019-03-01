import React, { Component } from 'react';

import Smurf from './Smurf';
import './Smurfs.css';
import './Loader.css';

class Smurfs extends Component {
  render() {
    if (this.props.smurfs.length === 0) {
      return (
        <div className="Smurfs">
          <h1>Smurf Village</h1>
          <div class="loader">Loading...</div>
        </div>
      )
    }

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                setUpdatedSmurf={this.props.setUpdatedSmurf}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
