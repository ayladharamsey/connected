import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getNewsData } from '../../apiCalls';
import { 
  selectNav,
  saveArticle,
  unsaveArticle,
  readArticle,
  unreadArticle,
  setLoader,
  hasError } from '../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { errorReducer } from '../../reducers/errorReducer';
import { favoriteReducer } from '../../reducers/favoriteReducer';
import { langReducer } from '../../reducers/langReducer';
import { loadingReducer } from '../../reducers/loadingReducer';
import { navReducer } from '../../reducers/navReducer';
import { readReducer } from '../../reducers/readReducer';


class App extends Component {

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
      <main>

      </main>

    )
  }
}

export const mapStateToProps = state => ({
  error: errorReducer,
  favorites: favoriteReducer,
  language: langReducer,
  isLoading: loadingReducer,
  nav: navReducer,
  read: readReducer
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectNav,
    saveArticle,
    unsaveArticle,
    readArticle,
    unreadArticle,
    setLoader,
    hasError
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);