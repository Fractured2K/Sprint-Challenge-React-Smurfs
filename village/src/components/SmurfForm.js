import React, { Component } from 'react';

import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurf: this.props.updatedSmurf || {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.updatedSmurf &&
      prevProps.updatedSmurf !== this.props.updatedSmurf
    ) {
      this.setState({
        smurf: this.props.updatedSmurf
      });
    }
  }

  addSmurf = e => {
    e.preventDefault();

    if (this.props.updatedSmurf) {
      this.props.updateSmurf(this.state.smurf)
    } else {
      this.props.addSmurf(this.state.smurf)
    }


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    e.persist();

    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">{this.props.updatedSmurf ? "Update smurf" : "Add to the village"}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
