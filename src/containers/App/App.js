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
  setNewsData,
  hasError 
} from '../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { errorReducer } from '../../reducers/errorReducer';
import { favoriteReducer } from '../../reducers/favoriteReducer';
import { langReducer } from '../../reducers/langReducer';
import { loadingReducer } from '../../reducers/loadingReducer';
import { navReducer } from '../../reducers/navReducer';
import { readReducer } from '../../reducers/readReducer';
import { newsDataReducer } from '../../reducers/newsDataReducer';

class App extends Component {

   componentDidMount= async () => {
     const { setLoader, setNewsData, hasError } = this.props;
      try {
        setLoader(true);
        const newsData = await getNewsData();
        setNewsData(newsData);
        setLoader(false)
      } catch(error) {
        hasError(error.message)
        setLoader(false) // do i need this?
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
  read: readReducer,
  data: newsDataReducer
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoader,
    hasError,
    setNewsData
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  error: PropTypes.string,
  favorites: PropTypes.array,
  language:  PropTypes.string,
  isLoading: PropTypes.bool,
  nav: PropTypes.string,
  read: PropTypes.array,
  selectNav: PropTypes.func,
  saveArticle: PropTypes.func,
  unsaveArticle: PropTypes.func,
  readArticle: PropTypes.func,
  unreadArticle: PropTypes.func,
  setLoader: PropTypes.func,
  hasError: PropTypes.func
}