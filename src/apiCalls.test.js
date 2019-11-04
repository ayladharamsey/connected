import { getNewsData, cleanedNewsData } from './apiCalls'

describe('getNewsData', () => {
    const mockResponse = [{}, {}, {}, {}];
    const countryCode ='us';
    const apiKey = 'e5c18cb797134ce790544a6248eca1e7';
    let url;
    
    it('should call the fetch function with the correct URL', () => {
        url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;
        
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
        getNewsData();
        expect(window.fetch).toHaveBeenCalledWith(url);
      });

    it('should return an array of articles', () => {
        expect(getNewsData()).resolves.toEqual(mockResponse);
    });

    it('should return an error if you do not get ok response', () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: false
          });
        });
        expect(getNewsData()).rejects.toEqual(Error('There was an error getting your news data.'));
    });
})