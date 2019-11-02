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

    toggleSaveArticle = (id) => {
        let currentState = this.state.isSavedForLater;
        this.setState({
            isSavedForLater: !currentState
        })
        console.log(this.state)
        this.state.isSavedForLater ? saveArticle(id) : unsaveArticle(id);
    }

    toggleCompleteArticle = () => {

    }
    render() {
        const {id, title, author, content, url } = this.props;
        return (
            <section id={id} key={id} className="card"> 
               <h4>{title}</h4>
               <h3>{author}</h3>
               <p>{content}</p>
               <button onClick={() => this.goToLink(url)}>Read Article</button>
               <button 
                className={this.state.isSavedForLater ? 'save' : 'unsave'} 
                onClick={() => this.toggleSaveArticle(id)}
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

  })

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
      saveArticle,
      unsaveArticle
    }, dispatch)
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);