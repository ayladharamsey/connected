import React, { Component } from 'react';
import { getNewsData } from './apiCalls'

class App extends Component {
  constructor() {
    super();
  }

   componentDidMount= async () => {
    try {
      const newsData = await getNewsData();
      console.log(newsData)
    } catch(error) {
      console.log(error.message)

    }

  }

  render() {
    return (
      <p> hi </p>

    )
  }
}

export default App;