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

describe('MapStateToProps', () => {
  it('should return error, language, is loading, and country', () => {
    let error, language, isLoading, country;
    let mockState = {
      error,
      language, 
      isLoading,
      country
    }

    let expected = {
      error,
      language, 
      isLoading,
      country
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

    it('should call call setLoader action with dispatch', () => {
      const mockAction = setLoader(true);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.setLoader(true);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });
   
    it('should call call hasError action with dispatch', () => {
      const mockError = 'wow u suck'
      const mockAction = hasError(mockError);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.hasError(mockError);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });

    it('should call call setNewsData action with dispatch', () => {
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

    }
]
      const mockAction = setNewsData(mockData);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.setNewsData(mockData);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });

    it('should call call selectNav action with dispatch', () => {
      const mockNavSelect = 'live'
      const mockAction = selectNav(mockNavSelect);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.selectNav(mockNavSelect);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });
})