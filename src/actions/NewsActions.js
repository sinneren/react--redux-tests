export function loadNews(news) {
    return dispatch => {
        dispatch({
            type: 'NEWS_FETCHING',
            payload: {
                fetching: true,
            }
        });
        setTimeout(() => {
            dispatch({
                type: 'NEWS_LOADED',
                payload: {
                    fetching: false,
                    news: news,
                }
            });
        }, 2000)
    }
}