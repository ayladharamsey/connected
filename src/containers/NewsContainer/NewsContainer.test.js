import React from 'react';
import { shallow } from 'enzyme';
import { NewsContainer, mapDispatchToProps, mapStateToProps } from './NewsContainer'
import {
    chooseCountry,
    setNewsData
  } from '../../actions/index';

  describe('NewsContainer', () => {
    let wrapper; 
    const filterByNav = jest.fn();
    
    it('should match the snapshot', () => {
        wrapper = shallow(<NewsContainer 
        filterByNav={filterByNav}
        />)

        expect(wrapper).toMatchSnapshot();
    })

  })