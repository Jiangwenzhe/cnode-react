import React, { Component } from 'react';
import './home.scss';
import mock_data from '../../assets/mock-data/home';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(mock_data);
    return (
      <div>
        home
      </div>
    )
  }
}

export default Home;