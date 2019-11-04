import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewsArticle.scss';

export class NewsArticle extends Component {
    
    goToSource = (url) => {
        window.open(url)
    }

    render() {
        const {chosenArticle} = this.props;
        return (
            <section className='chosenArticle'>
                <div className='container'>
                    <h2>{chosenArticle.title}</h2>
                    <h3 id="author">{chosenArticle.author}</h3>
                    <p>{chosenArticle.content}</p>
                    <button onClick={() => this.goToSource(chosenArticle.url)}>View Original Article</button>
                </div>
             </section>
            )
    }
    
}

export const mapStateToProps = state => ({
    chosenArticle: state.chooseArticleReducer
  })

export default connect(mapStateToProps, null)(NewsArticle);
