import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';


describe( 'Nav', () => {
    const filterByNav = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Nav filterByNav={filterByNav}/>)
    })
    
    it('should match the snapshots', () => {
        expect(wrapper).toMatchSnapshot();
    })

})