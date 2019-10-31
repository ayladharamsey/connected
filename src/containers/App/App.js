import React, { Component } from 'react';
import { getNewsData } from '../../apiCalls'

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