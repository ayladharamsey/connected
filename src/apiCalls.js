export const getNewsData = async (countryCode) => {
    const apiKey = 'e5c18cb797134ce790544a6248eca1e7'
    const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('There was an error getting your news data.');
    }
    const data = await response.json();
    const cleanData = await cleanNewsData(data.articles, countryCode); 
    return await Promise.all(cleanData)
}

export const cleanNewsData = async (newsData, countryCode) => {
    return await newsData.map(async (result, index) => {
        const { author, title, content, description, source, url, urlToImage, publishedAt } = result;
        return {
            author,
            title,
            content,
            description,
            source, 
            url,
            urlToImage,
            publishedAt,
            id: index,
            countryCode,
            isRead: false,
            isSavedForLater: false
        }
    })
}