export const reducer = (state = {embedURL: 'https://giphy.com/embed/n1veaCvJjtFwQ'}, action) => {
    switch (action.type) {
        case 'INPUT':
            return Object.assign({}, state, { embedURL: action.url })
        case 'GIF_FETCH_SUCCEEDED':
            return Object.assign({}, state, { embedURL: action.embedURL})
        case 'GIF_FETCH_FAILED':
            return state
        case 'RANDOM_FETCH_SUCCEEDED':
            return Object.assign({}, state, { embedURL: action.embedURL})
        case 'RANDOM_FETCH_FAILED':
            return state
        default:
            return state
    }
}