import React from 'react';
import { shallow } from 'enzyme';
import { NewsCard, mapStateToProps, mapDispatchToProps } from './NewsCard';

describe('NewsCard', () => {
    let wrapper;

    it('should match the snapshot', () => {
        wrapper=shallow(<NewsCard />)
    })
})