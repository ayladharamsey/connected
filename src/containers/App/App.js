import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getNewsData } from '../../apiCalls';
import { 
  setLoader,
  setNewsData,
  hasError, 
  selectNav
} from '../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Nav } from '../Nav/Nav';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : []
    }
  }

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

  filterByNav = () => {
    const { completed, savedForLater, navName } = this.props;
    if(navName === 'saved') {
      this.setState({
        data: savedForLater
      })
    } else if(navName === 'read') {
      this.setState({
        data: completed
      })
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
                <NewsContainer data={this.state.data} />
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
                <NewsContainer data={this.state.data}/>
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
  language: state.langReducer,
  isLoading: state.loadingReducer,
  navName: state.navReducer,
  countryOptions: state.countryReducer,
  savedForLater: state.favoriteReducer,
  completed: state.readReducer
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoader,
    hasError,
    setNewsData,
    selectNav
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