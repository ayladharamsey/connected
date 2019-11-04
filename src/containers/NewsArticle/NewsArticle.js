import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NewsArticle extends Component {
    
    goToSource = (url) => {
        window.open(url)
    }

    render() {
        const {chosenArticle} = this.props;
        return (
            <section className='chosenArticle'>
                <h2>{chosenArticle.title}</h2>
                <h3>{chosenArticle.author}</h3>
                 <p>{chosenArticle.content}</p>
                <button onClick={() => this.goToSource(chosenArticle.url)}>View Original Article</button>
             </section>
            )
    }
    
}

export const mapStateToProps = state => ({
    chosenArticle: state.chooseArticleReducer
  })

export default connect(mapStateToProps, null)(NewsArticle);
