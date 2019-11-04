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
    
    beforeEach(() => {
      wrapper = shallow(<NewsContainer filterByNav={filterByNav} />)
    }); 

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update state with a chosen country', () => {
      const mockEvent = {
        target: { name: 'firstCountry', value: 'Lithuania'}
      }
      expect(wrapper.state('firstCountry')).toEqual('');
      wrapper.instance().updateCountry(mockEvent);
      expect(wrapper.state('firstCountry')).toEqual('Lithuania');
    });

    it.skip('should filter the news data and update state', () => {
      const data =[{}, {}, {}]
      const setNewsData = jest.fn();
      wrapper.find('button').simulate('click');
      wrapper.instance().filterNewsData();
      expect(wrapper.state('firstCountryData')).toEqual(data);
      expect(setNewsData).toHaveBeenCalledWith(data)
    });

})

describe('MapStateToProps', () => {
  it('should return error, isLoading, and country', () => {
    let countryOptions, nav, favorites, completed, newsData;
    let mockState = {
      countryOptions,
      nav,
      favorites,
      completed, 
      newsData
    }

    let expected = {
      countryOptions,
      nav,
      favorites,
      completed, 
      newsData
    }

    const props = mapStateToProps(mockState);
    expect(props).toEqual(expected)
  })
})

describe('MapDispatchToProps', () => {
  let mockDispatchedAction;
  
  beforeEach(() => {
    mockDispatchedAction = jest.fn();
  })

  it('should call call chooseCountry action with dispatch', () => {
    const mockAction = chooseCountry('eu');
    const props = mapDispatchToProps(mockDispatchedAction);

    props.chooseCountry('eu');

    expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
  });

  it('should call call chooseCountry action with dispatch', () => {
    const mockData = [
      {
          author: 'Lemon',
          title:"Nachfolger John Bercows wird gewählt - derStandard.at",
          content:"Ich stimme der Verwendung von Cookies für die Zwecke der Webanalyse und digitaler Werbemaßnahmen zu. Auch wenn ich diese Website weiter nutze, gilt dies als Zustimmung. Meine Einwilligung kann ich hier widerrufen.",
          description:null,
          url:"https://www.derstandard.de/story/2000110638480/nachfolger-john-bercows-wird-gewaehlt",
          urlToImage:"https://at.staticfiles.at/img/meta/meta_image_1200x630-4d0796cf00.png",
          publishedAt:"2019-11-04T05:10:00Z",
          id:0,
          countryCode:"at",
          isSavedForLater: true
      }, 
      {
          author:null,
          title:"second example",
          content:"Words.",
          description:null,
          url:"cool.com",
          urlToImage:"cooler.com",
          publishedAt:"2019-11-04T05:10:00Z",
          id:1,
          countryCode:"at",
          isSavedForLater: true

  }]
    const mockAction = setNewsData(mockData);
    const props = mapDispatchToProps(mockDispatchedAction);

    props.setNewsData(mockData);

    expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
  });

});