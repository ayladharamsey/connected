import React from 'react';
import { connect } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import './CardContainer.scss';
import PropTypes from 'prop-types';


export const CardContainer = ({ column, newsData }) => {
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
            country={article.countryCode}
            isRead={article.isRead}
            isSavedForLater={article.isSavedForLater}
            column={column}
        />
    }) 

    return (
        <section className="card-container">
            {newsData.length > 0 ? card : <h5>Select a country to see news.</h5>}
        </section>
    )
}

export const mapStateToProps = state => ({
    nav: state.navReducer,
    favorites: state.favoritesReducer,
    completed: state.readReducer
})

export default connect(mapStateToProps, null)(CardContainer);


CardContainer.propTypes = {
    column: PropTypes.number,
    newsData: PropTypes.array,
    nav: PropTypes.string,
    favorites: PropTypes.array,
    completed: PropTypes.array
}