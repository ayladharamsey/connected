import React from 'react';
import { shallow } from 'enzyme';
import { NewsCard, mapStateToProps, mapDispatchToProps } from './NewsCard';

describe('NewsCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper=shallow(<NewsCard />)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    
})