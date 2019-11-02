import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveArticle, unsaveArticle } from '../../actions/index';
import './NewsCard.scss';



class NewsCard extends Component {
    constructor() {
        super();
        this.state = {
            isSavedForLater: false,
            isRead: false
        }
    }

    goToLink = (url) => {
        return window.open(url)
    }

    toggleSaveArticle = async (article, country) => {
        const { data } = this.props;
        let currentState = this.state.isSavedForLater;
        await this.setState({
            isSavedForLater: !currentState
        })
        const foundCountry = data.find(info => info[0].countryCode === country);
        const foundArticle = foundCountry.find(info => info.id === article.id);
        currentState ? unsaveArticle(foundArticle) : saveArticle(foundArticle);
    }

    toggleCompleteArticle = () => {

    }
    render() {
        const {id, title, author, content, url, country } = this.props;
        return (
            <section id={id} key={id} className="card"> 
               <h4>{title}</h4>
               <h3>{author}</h3>
               <p>{content}</p>
               <button onClick={() => this.goToLink(url)}>Read Article</button>
               <button 
                className={this.state.isSavedForLater ? 'save' : 'unsave'} 
                onClick={() => this.toggleSaveArticle(this.props, country)}
                >
                Save For Later
                </button>
               <button 
                className={this.state.isRead ? 'complete' : 'incomplete'} 
                onClick={this.toggleCompleteArticle(id)}
                >
                Mark as Read
                </button>
            </section>
       )
    }  
}

export const mapStateToProps = state => ({
    data: state.newsDataReducer
  })

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
      saveArticle,
      unsaveArticle
    }, dispatch)
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);

//add propTypes