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
  hasError,
  chooseCountry 
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
import { countryReducer } from '../../reducers/countryReducer';
import { Nav } from '../Nav/Nav';
import { NewsContainer } from '../NewsContainer/NewsContainer';
import { Stats } from '../Stats/Stats';
import { NewsCard } from '../NewsCard/NewsCard';


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

  filterByCountry = (chosen = 'en') => {
    
  }

  render() {
    return (
      <main>
        <Route
          path = "/"
          render = {() => {
            return (
              <>
                <Nav/>
                <NewsContainer />
              </>
            )
          }}
        />
        <Route
          path = "/saved"
          render = {() => {
            return (
              <>
                <Nav/>
                <NewsContainer />
              </>
            )
          }}
        />
        <Route
          path = "/read"
          render = {() => {
            return (
              <>
                <Nav/>
                <NewsContainer />
              </>
            )
          }}
        />
        <Route
          path = "/:articleId"
          render = {() => {
            return (
              <>
                <Stats/>
                <NewsCard />
              </>
            )
          }}
        />
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
  data: newsDataReducer,
  countryOptions: countryReducer
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoader,
    hasError,
    setNewsData,
    chooseCountry
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