import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getNewsData } from '../../apiCalls';
import { 
  setLoader,
  setNewsData,
  hasError
} from '../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Nav } from '../Nav/Nav';
import NewsContainer from '../NewsContainer/NewsContainer';
import { Stats } from '../Stats/Stats';


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
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  error: state.errorReducer,
  favorites: state.favoriteReducer,
  language: state.langReducer,
  isLoading: state.loadingReducer,
  nav: state.navReducer,
  read: state.readReducer,
  data: state.newsDataReducer,
  countryOptions: state.countryReducer
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoader,
    hasError,
    setNewsData,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  error: PropTypes.string,
  favorites: PropTypes.array,
  language:  PropTypes.string,
  isLoading: PropTypes.bool,
  setNewsData: PropTypes.func,
  setLoader: PropTypes.func,
  hasError: PropTypes.func
}