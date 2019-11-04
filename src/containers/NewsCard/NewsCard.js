import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveArticle, unsaveArticle, readArticle, unreadArticle } from '../../actions/index';
import './NewsCard.scss';
import clock from '../../images/edited/outsource.png';
import save from '../../images/edited/clock-active.png';
import unsave from '../../images/edited/clock-inactive.png';
import read from '../../images/edited/check-active.png';
import unread from '../../images/edited/check-inactive.png';

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

    toggleSaveArticle = async (article, country, column) => {
        const { data, saveArticle } = this.props;
        let currentState = this.state.isSavedForLater;
        await this.setState({
            isSavedForLater: !currentState
        })
        const foundCountry = data.find(info => info[0].countryCode === country);
        let foundArticle = foundCountry.find(info => info.id === article.id);
        foundArticle.column = column
        this.state.isSavedForLater ? saveArticle(foundArticle) : unsaveArticle(foundArticle);
    }

    toggleCompleteArticle = async (article, country, column) => {
        const { data, readArticle } = this.props;
        let currentState = this.state.isRead;
        await this.setState({
            isRead: !currentState
        })
        const foundCountry = data.find(info => info[0].countryCode === country);
        let foundArticle = foundCountry.find(info => info.id === article.id);
        foundArticle.column = column
        this.state.isRead ? readArticle(foundArticle) : unreadArticle(foundArticle);
    }
     
    render() {
        const {id, title, content, url, country, column, isSavedForLater, isRead } = this.props;
        return (
            <section id={id} key={id} className="card"> 
                <div className="top">
                    <h4>{title}</h4>
                </div>
                <p>{content}</p>
                <div className="bottom">
                    <div className="left">
                            <img 
                            onClick={() => this.goToLink(url)} 
                            alt='opens link to article'
                            src={clock}
                            className='clock'
                            />
                    </div>
                    <div className="right">
                        <img
                            className='saveBtn'
                            onClick={() => this.toggleSaveArticle(this.props, country, column)}
                            src={ isSavedForLater ? save : unsave }
                        />
                        <img 
                            className='completeBtn' 
                            onClick={() => this.toggleCompleteArticle(this.props, country, column)}
                            src={ isRead ? read : unread }
                        />
                    </div>
                </div>
            </section>
       )
    }  
}

export const mapStateToProps = state => ({
    data : state.newsDataReducer
  })

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
      saveArticle,
      unsaveArticle,
      readArticle,
      unreadArticle
    }, dispatch)
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);

//add propTypes