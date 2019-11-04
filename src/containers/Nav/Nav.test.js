import React from 'react';
import { shallow } from 'enzyme';
import {Nav} from './Nav';

describe('Nav', () => {
    let wrapper;
    const filterByNav = jest.fn();

    it('should match the snapshots', () => {
        wrapper = shallow(<Nav filterByNav={filterByNav}/>)
    })

})