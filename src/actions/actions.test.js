import * as actions from './index';

describe('actions', () => {
    
    it('should have a type for SELECT_NAV', () => {
        const navName = 'live';
        const expected = {
            type: 'SELECT_NAV',
            navName
        }

        const result = actions.selectNav(navName);
        expect(result).toEqual(expected)
    })

    it('should have a type for SAVE_ARTICLE', () => {
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

        const expected = {
            type: 'SAVE_ARTICLE',
            article
        }

        const result = actions.saveArticle(article);
        expect(result).toEqual(expected);
    })

    it('should have a type for UNSAVE_ARTICLE', () => {
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
        
        const expected = {
            type: 'UNSAVE_ARTICLE',
            article
        }

        const result = actions.unsaveArticle(article);
        expect(result).toEqual(expected)
    })

    it('should have a type for READ_ARTICLE', () => {
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
        
        const expected = {
            type: 'READ_ARTICLE',
            article
        }

        const result = actions.readArticle(article);
        expect(result).toEqual(expected)
        
    })

    it('should have a type for UNREAD_ARTICLE', () => {
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
        
        const expected = {
            type: 'UNREAD_ARTICLE',
            article
        }

        const result = actions.unreadArticle(article);
        expect(result).toEqual(expected)
        
    })

    it('should have a type for SET_LOADER if true', () => {
        const bool = true;
        const expected = {
            type: 'SET_LOADER',
            bool
        }

        const result = actions.setLoader(bool);
        expect(result).toEqual(expected)
        
    })

    it('should have a type for SET_LOADER if false', () => {
        const bool = false;
        const expected = {
            type: 'SET_LOADER',
            bool
        }

        const result = actions.setLoader(bool);
        expect(result).toEqual(expected)
        
    })

    it('should have a type for SET_DATA', () => {
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
        const expected = {
            type: 'SET_DATA',
            data
        }

        const result = actions.setNewsData(data);
        expect(result).toEqual(expected)
        
    })

    it('should have a type for HAS_ERROR', () => {
        const error = 'ya messed up bro';
        const expected = {
            type: 'HAS_ERROR',
            error
        }

        const result = actions.hasError(error);
        expect(result).toEqual(expected);
    })

    it('should have a type for CHOOSE_COUNTRY', () => {
        const chosenCountry = 'ae';
        const expected = {
            type: 'CHOOSE_COUNTRY',
            chosenCountry
        }

        const result = actions.chooseCountry(chosenCountry);
        expect(result).toEqual(expected);
    })

    it('should have a type for CHOOSE_ARTICLE', () => {
        const column = 1;
        const id = 1;
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
        const expected = {
            type: 'CHOOSE_ARTICLE',
            column,
            id,
            data
        }

        const result = actions.chooseArticle(column, id, data);
        expect(result).toEqual(expected)
    })
})