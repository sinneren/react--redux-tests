const initialState = {
   fetching: false,
   news: [],
}

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case 'NEWS_FETCHING':
            return {
                ...state,
                fetching: true,
            }
        case 'NEWS_LOADED':
            return {
                ...state,
                fetching: false,
                news: action.payload,
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