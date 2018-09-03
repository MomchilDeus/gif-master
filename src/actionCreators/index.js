import { INPUT, GIF_FETCH_REQUESTED, RANDOM_FETCH_REQUESTED } from '../actionTypes/index'

export const inputCreator = url => ({
    type: INPUT,
    url
})

export const fetchCreator = queryString => {
    return {
        type: GIF_FETCH_REQUESTED,
        queryString
    }
}

export const randomFetchCreator = () => ({
    type: RANDOM_FETCH_REQUESTED
})