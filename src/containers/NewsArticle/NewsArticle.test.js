import React from 'react';
import { shallow } from 'enzyme';
import { NewsArticle, mapStateToProps } from './NewsArticle';

describe('NewsArticle', () => {
    let wrapper;
    const chosenArticle = {
        title: 'Where the wind blows South',
        author: 'Bill Murray',
        content: 'I am super cool'
        
    }
    
    it('should match the snapshot', () => {
        wrapper = shallow(<NewsArticle chosenArticle={chosenArticle}/>)
    })
})