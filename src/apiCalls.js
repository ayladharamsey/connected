export const getNewsData = async (countryCode = 'us') => {
    const apiKey = 'e5c18cb797134ce790544a6248eca1e7'
    const country = countryCode;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('There was an error getting your news data.');
    }
    const data = await response.json();
    return data.articles
}