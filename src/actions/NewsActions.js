export function loadNews(news) {
    return {
        type: 'NEWS_LOADED',
        payload: news,
    }
}