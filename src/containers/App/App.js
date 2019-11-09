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
import { Nav } from '../../components/Nav/Nav';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import './App.scss'

export class App extends Component {

   componentDidMount= async () => {
     const { setLoader, setNewsData, hasError } = this.props;
      try {
        setLoader(true);
        const newsData = await getNewsData();
        setNewsData(newsData);
        setLoader(false);
      } catch(error) {
        hasError(error.message);
        setLoader(false);
      }
  }

  filterByNav = (e) => {
    const { selectNav } = this.props;
    const name = e.target.className;
    if(name === 'saved') {
      selectNav('saved')
    } else if(name === 'completed') {
      selectNav('completed')
    } else if(name ==='live') {
      selectNav('live')
    }
  }
  

  render() {
    return (
      <main>
        <Route
          exact
          path = "/"
          render = {() => {
            return (
              <>
                <Nav filterByNav={this.filterByNav}/>
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
                <Nav filterByNav={this.filterByNav}/>
                <NewsContainer />
              </>
            )
          }}
        />
        <Route 
          exact 
          path = "/read"
          render = {() => {
            return (
              <>
                <Nav filterByNav={this.filterByNav}/>
                <NewsContainer />
              </>
            )
          }}
          />
        <Route exact path = "/article/:id/" render={() => {
          return (
            <>
              <Nav filterByNav={this.filterByNav}/>
              <NewsArticle/>
            </>
          )
        }}/>
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  error: state.errorReducer,
  isLoading: state.loadingReducer,
  country: state.countryReducer,
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