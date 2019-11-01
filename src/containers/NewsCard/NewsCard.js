import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewsCard extends Component {
    goToLink = (url) => {
        return window.open(url)
    }

    toggleSaveArticle = (country, id) => {
        console.log(country, id)
        const { data } = this.props;
        const news = 
        console.log(news)
    }

    toggleCompleteArticle = (country, id) => {

    }
    render() {
        console.log(this.props)
        const {id, title, author, content, url, countryCode } = this.props;
        return (
            <section id={id} key={id}> 
               <h1>{title}</h1>
               <h3>{author}</h3>
               <p>{content}</p>
               <button onClick={() => this.goToLink(url)}>Read Article</button>
               <button onClick={() => this.toggleSaveArticle(countryCode, id)}>Save For Later</button>
               <button onClick={() => this.toggleCompleteArticle(countryCode, id)}>Mark as Read</button>
            </section>
       )
    }  
}

export const mapStateToProps = state => ({
    favorites: state.favoriteReducer,
    read: state.readReducer,
    data: state.newsDataReducer,
  });

export default connect(mapStateToProps, null)(NewsCard);