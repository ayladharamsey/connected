import { chooseArticleReducer } from './chooseArticleReducer';
import { countryReducer } from './countryReducer';
import { errorReducer } from './errorReducer';
import { favoriteReducer } from './favoriteReducer';
import { loadingReducer } from './loadingReducer';
import { navReducer } from './navReducer';
import { newsDataReducer } from './newsDataReducer';
import { readReducer } from './readReducer';

describe('chooseArticleReducer', () => {
    it('should return the initial state', () => {
        const expected = {};
        const result = chooseArticleReducer(undefined, {});
        expect(result).toEqual(expected);
      });

      it.skip('should return article if action.type is CHOOSE_ARTICLE', () => {
        const column = 1;
        const id = 3;
        const data = [
            {
                author: 'Lemon',
                title:"Nachfolger John Bercows wird gewählt - derStandard.at",
                content:"Ich stimme der Verwendung von Cookies für die Zwecke der Webanalyse und digitaler Werbemaßnahmen zu. Auch wenn ich diese Website weiter nutze, gilt dies als Zustimmung. Meine Einwilligung kann ich hier widerrufen.",
                description:null,
                url:"https://www.derstandard.de/story/2000110638480/nachfolger-john-bercows-wird-gewaehlt",
                urlToImage:"https://at.staticfiles.at/img/meta/meta_image_1200x630-4d0796cf00.png",
                publishedAt:"2019-11-04T05:10:00Z",
                id:0,
                countryCode:"at"
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
                countryCode:"at"
            }
        ]

        const mockAction = {
            type: 'CHOOSE_ARTICLE', 
            column: column,
            id: id,
            data: data
        };

        const mockArticle = {
            author:null,
            title:"second example",
            content:"Words.",
            description:null,
            url:"cool.com",
            urlToImage:"cooler.com",
            publishedAt:"2019-11-04T05:10:00Z",
            id:1,
            countryCode:"at"
        }

        const result = chooseArticleReducer({}, mockAction);
        expect(result).toEqual(mockArticle); 
      });

})


describe('countryReducer', () => {
    
    it('should return the initial state', () => {
        const expected = '';
        const result = countryReducer(undefined, {});
        expect(result).toEqual(expected);
      });

    it('should return a country when the type is CHOOSE_COUNTRY', () => {
        const chosenCountry = 'us'
        const mockAction = {
            type: 'CHOOSE_COUNTRY', 
            chosenCountry
        };
        const result = countryReducer('', mockAction);
        expect(result).toEqual(chosenCountry);
    });
});

describe('errorReducer', () => {
    
    it('should return the initial state', () => {
        const expected = '';
        const result = errorReducer(undefined, {});
        expect(result).toEqual(expected);
      });

    it('should return a boolean when the type is HAS_ERROR', () => {
        const error = 'you messed up bro'
        const mockAction = {
            type: 'HAS_ERROR', 
            error
        };
        const result = errorReducer('', mockAction);
        expect(result).toEqual(error);
    });
})

describe('favoriteReducer', () => {
    
    it('should return the initial state', () => {
        const expected = [];
        const result = favoriteReducer(undefined, {});
        expect(result).toEqual(expected);
      });

    it('should return remove the article from state when the type is UNSAVE_ARTICLE', () => {
        
        const article = {
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

        const mockState = [
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

        const expected = {
            author:null,
            title:"second example",
            content:"Words.",
            description:null,
            url:"cool.com",
            urlToImage:"cooler.com",
            publishedAt:"2019-11-04T05:10:00Z",
            id:1,
            countryCode:"at",
            isSavedForLater: false

        }

        const mockAction = {
            type: 'UNSAVE_ARTICLE', 
            article
        };
        const result = favoriteReducer(mockState, mockAction);
        expect(result).toEqual([expected]);
    });
})

describe('loadingReducer', () => {
    
    it('should return the initial state of false', () => {
        const expected = false;
        const result = loadingReducer(false, {});
        expect(result).toEqual(expected);
      });

    it('should return a boolean when the type is SET_LOADER, if true', () => {
        const bool = true;
        const mockAction = {
            type: 'SET_LOADER', 
            bool
        };
        const result = loadingReducer('', mockAction);
        expect(result).toEqual(bool);
    });

    it('should return a boolean when the type is SET_LOADER', () => {
        const bool = false;
        const mockAction = {
            type: 'SET_LOADER', 
            bool
        };
        const result = loadingReducer('', mockAction);
        expect(result).toEqual(bool);
    });
})

describe('navReducer', () => {
    
    it('should return the initial state', () => {
        const expected = '';
        const result = navReducer(undefined, {});
        expect(result).toEqual(expected);
      });

    it('should return a navName when the type is SELECT_NAV', () => {
        const navName = 'live'
        const mockAction = {
            type: 'SELECT_NAV', 
            navName
        };
        const result = navReducer('', mockAction);
        expect(result).toEqual(navName);
    });
})

describe('newsDataReducer', () => {
    
    it('should return the initial state', () => {
        const expected = [];
        const result = newsDataReducer(undefined, {});
        expect(result).toEqual(expected);
      });

    it('should return a navName when the type is SET_DATA', () => {
        const data = [
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
        const mockAction = {
            type: 'SET_DATA', 
            data
        };
        const result = newsDataReducer([], mockAction);
        expect(result).toEqual(data);
    });
})