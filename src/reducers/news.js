const initialState = {
   fetching: false,
   news: [],
}

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case 'NEWS_FETCHING':
            return {
                ...state,
                fetching: action.payload.fetching,
            }
        case 'NEWS_LOADED':
            return {
                ...state,
                fetching: action.payload.fetching,
                news: action.payload.news,
            }
        case 'NEWS_FAIL':
            return {
                ...state,
                fetching: false,
            }
        default:
            return state;
    }
}