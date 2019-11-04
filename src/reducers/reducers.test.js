import { chooseArticleReducer } from './chooseArticleReducer';
import { countryReducer } from './countryReducer';
import { errorReducer } from './errorReducer';
import { favoriteReducer } from './favoriteReducer';
import { langReducer } from './langReducer';
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
})