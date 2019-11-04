import { getNewsData, cleanNewsData } from './apiCalls'

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
});

describe('cleanNewsData', () => {
    it('should return back a cleaned news article of article data with only the keys we want', () => {
        const allData = [
            {
                author: 'timmy',
                title: 'i want candy',
                content: 'you are mean',
                description: 'testing is hard',
                source: 'www.cool.com', 
                url: 'yup',
                urlToImage: 'www.cool.com',
                publishedAt: 'march 10',
                id: 0,
                countryCode: 'da',
                logo: 'www.logo.com',
                details: 'so many details'
            },
            {
                author: 'billy',
                title: 'i do notwant candy',
                content: 'you are mean but i like it',
                description: 'testing is hard but it isnt',
                source: 'www.uncool.com', 
                url: 'nope',
                urlToImage: 'www.uncool.com',
                publishedAt: 'march 12',
                id: 1,
                countryCode: 'po',
                logo: 'www.logos.com',
                details: 'so many deets'
                } 
        ]
        const receivedData =
            {
            author: 'timmy',
            title: 'i want candy',
            content: 'you are mean',
            description: 'testing is hard',
            source: 'www.cool.com', 
            url: 'yup',
            urlToImage: 'www.cool',
            publishedAt: 'march 10',
            id: 0,
            countryCode: 'da'
            }
            
            expect(getNewsData()).resolves.toEqual(receivedData)
    })
})