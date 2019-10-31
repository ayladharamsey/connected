import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getNewsData } from '../../apiCalls';
import * as actions from '../../actions/index';


class App extends Component {
  constructor() {
    super();
  }

   componentDidMount= async () => {
    try {
      const newsData = await getNewsData();
      return newsData
    } catch(error) {
      return error.message
    }

  }

  render() {
    return (
      <p> hi </p>

    )
  }
}

export default App;