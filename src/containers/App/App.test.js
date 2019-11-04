import React from 'react';
import { shallow } from 'enzyme';
import {App, mapStateToProps, mapDispatchToProps} from './App';
import {
  setLoader,
  hasError,
  setNewsData,
  selectNav
} from '../../actions/index';

jest.mock('../../apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})