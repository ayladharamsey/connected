import React from 'react';
import { connect } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import './CardContainer.scss'


export const CardContainer = ({ newsData }) => {
    const card = newsData.map(article => {
        return  <NewsCard 
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
            country={article.countryCode}
            isRead={article.isRead}
            isSavedForLater={article.isSavedForLater}
        />
    })
    return (
        <section className="card-container">
            {card}
        </section>
    )
}

export const mapStateToProps = state => ({
    nav: state.navReducer
})

export default connect(mapStateToProps, null)(CardContainer);
