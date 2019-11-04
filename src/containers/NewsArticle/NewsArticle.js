import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NewsArticle extends Component {
    
    render() {
        const {chosenArticle} = this.props;
        return (
            <section className='chosenArticle'>
                <h2>{chosenArticle.title}</h2>
                <h3>{chosenArticle.author}</h3>
                 <p>{chosenArticle.content}</p>
                <Link to={chosenArticle.url}><button>View Original Article</button></Link>
             </section>
            )
    }
    
}

export const mapStateToProps = state => ({
    chosenArticle: state.chooseArticleReducer
  })

export default connect(mapStateToProps, null)(NewsArticle);
