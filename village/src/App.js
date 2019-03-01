import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import NavBar from './components/layout/NavBar';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))

    this.props.history.push('/');
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />
        <Route path="/smurf-form" render={() => <SmurfForm addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
