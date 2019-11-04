import React from 'react';
import { shallow } from 'enzyme';
import {CardContainer, mapStateToProps} from './CardContainer';

describe('CardContainer', () => {
    let wrapper;
    let column = 1;
    let newsData = [
        {title: 'Everything is awesome', id: 2, content: 'everything is super stellar' }
    ]

    it('should match the snapshot', () => {
        wrapper = shallow(<CardContainer 
            column={column}
            newsData={newsData}
        />)

        expect(wrapper).toMatchSnapshot();
    })
})

describe('mapStateToProps', () => {
    it('should return the nav, favorites, and completed info', () => {
        let nav, favorites, completed;
        let mockState = {
            nav, 
            favorites,
            completed
        }
        let expected = {
            nav, 
            favorites,
            completed
        }
        
        const props = mapStateToProps(mockState);
        expect(props).toEqual(expected)
    })
})