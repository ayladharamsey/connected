import React from 'react';
import { connect } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';

export const CardContainer = ({ newsData }) => {
    const card = newsData.map(article => {
        return <NewsCard 
            key={article.id}
            id={article.id}
            author={article.author}
            title={article.title}
            content={article.content}
            description={article.description}
            source={article.source}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
        />
    })
    return (
        <section className="CardContainer">
            {card}
        </section>
    )
}

export const mapStateToProps = state => ({
    nav: state.navReducer
})

export default connect(mapStateToProps, null)(CardContainer);
