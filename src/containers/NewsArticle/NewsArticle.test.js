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

    beforeEach(() => {
        wrapper = shallow(<NewsArticle chosenArticle={chosenArticle}/>)
    })
    
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should open up a new window with the source article upon click', () => {
        global.open = jest.fn()
        wrapper.find('button').simulate('click')
        expect(global.open).toHaveBeenCalled()
    })
})