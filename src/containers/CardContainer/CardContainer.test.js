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