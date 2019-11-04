import React from 'react';
import { shallow } from 'enzyme';
import { NewsCard, mapStateToProps, mapDispatchToProps } from './NewsCard';
import {
    saveArticle,
    unsaveArticle,
    readArticle,
    unreadArticle,
    chooseArticle 
} from '../../actions/index'

describe('NewsCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper=shallow(<NewsCard />)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})

describe('mapStateToProps', () => {
    it('should return data', () => {
        let data;
        let mockState = {
          data
        }
    
        let expected = {
          data
        }
    
        const props = mapStateToProps(mockState);
        expect(props).toEqual(expected)
      })
})

describe('mapDispatchToProps', () => {
    let mockDispatchedAction;
    
    beforeEach(() => {
      mockDispatchedAction = jest.fn();
    })

    it('should call call saveArticle action with dispatch', () => {
        const article = {
            title: 'i am cool',
            content: 'no one is cool',
            id: 3
        }
        const mockAction = saveArticle(article);
        const props = mapDispatchToProps(mockDispatchedAction);
    
        props.saveArticle(article);
    
        expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    })

    it('should call call unsaveArticle action with dispatch', () => {
        const article = {
            title: 'i am cool',
            content: 'no one is cool',
            id: 3
        }
        const mockAction = unsaveArticle(article);
        const props = mapDispatchToProps(mockDispatchedAction);
    
        props.unsaveArticle(article);
    
        expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    })

    it('should call call readArticle action with dispatch', () => {
        const article = {
            title: 'i am cool',
            content: 'no one is cool',
            id: 3
        }
        const mockAction = readArticle(article);
        const props = mapDispatchToProps(mockDispatchedAction);
    
        props.readArticle(article);
    
        expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    })
    
    it('should call call unreadArticle action with dispatch', () => {
        const article = {
            title: 'i am cool',
            content: 'no one is cool',
            id: 3
        }
        const mockAction = unreadArticle(article);
        const props = mapDispatchToProps(mockDispatchedAction);
    
        props.unreadArticle(article);
    
        expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    })

    it('should call call chooseArticle action with dispatch', () => {
        const article = {
            title: 'i am cool',
            content: 'no one is cool',
            id: 3
        }
        const mockAction = chooseArticle(article);
        const props = mapDispatchToProps(mockDispatchedAction);
    
        props.chooseArticle(article);
    
        expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    })
})