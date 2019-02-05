import { newsReducer, initialState } from './news';

describe('news reducer', () => {
    it('NEWS_FETCHING', () => {
        const action = {
            type: 'NEWS_FETCHING',
            payload: {
                fetching: true,
            }
        }

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            fetching: true,
            news: []
        })
    })
    it('NEWS_LOADED', () => {
        const action = {
            type: 'NEWS_LOADED',
            payload: {
                fetching: false,
                news: [{
                    "_id": "5c595bde5f9f517570e7ab4f",
                    "isActive": true,
                    "picture": "http://placehold.it/128x128",
                    "title": "Title first",
                    "text": "Magna mollit ipsum amet et. Cupidatat sit Lorem nisi dolore voluptate ut aliquip dolore pariatur non ipsum ipsum. Fugiat in culpa cillum et deserunt ipsum laborum pariatur adipisicing cupidatat eu enim in. Fugiat incididunt elit culpa cillum fugiat elit est nulla occaecat sunt culpa anim fugiat. Esse laborum consequat tempor tempor veniam esse do ipsum elit aliquip. Tempor magna occaecat amet magna Lorem.",
                    "tags": [
                        "Lorem",
                        "ipsum",
                        "occaecat",
                        "qui",
                        "consequat"
                    ]
                }]
            }
        }

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            fetching: false,
            news: [{
                "_id": "5c595bde5f9f517570e7ab4f",
                "isActive": true,
                "picture": "http://placehold.it/128x128",
                "title": "Title first",
                "text": "Magna mollit ipsum amet et. Cupidatat sit Lorem nisi dolore voluptate ut aliquip dolore pariatur non ipsum ipsum. Fugiat in culpa cillum et deserunt ipsum laborum pariatur adipisicing cupidatat eu enim in. Fugiat incididunt elit culpa cillum fugiat elit est nulla occaecat sunt culpa anim fugiat. Esse laborum consequat tempor tempor veniam esse do ipsum elit aliquip. Tempor magna occaecat amet magna Lorem.",
                "tags": [
                    "Lorem",
                    "ipsum",
                    "occaecat",
                    "qui",
                    "consequat"
                ]
            }]
        })
    })
})