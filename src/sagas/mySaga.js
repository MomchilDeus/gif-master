import { put, takeLatest } from 'redux-saga/effects'
import { apiKey } from '../config/apiKey'

// fetch gif using query string
function* fetchGif(action) {
    try {
        const response = yield fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${action.queryString}&limit=25&offset=5&rating=G&lang=en`).then(response => response.json())
        const embedURL = response.data[Math.floor(Math.random() * 26)].embed_url
        yield put({ type: 'GIF_FETCH_SUCCEEDED', embedURL })
    } catch (e) {
        yield put({ type: 'GIF_FETCH_FAILED', message: e.message})
    }
}

// fetch random gif
function* fetchRandomGif() {
    try {
        const response = yield fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=R`)
        .then(response => response.json())
        const embedURL = response.data.embed_url
        yield put({ type: 'RANDOM_FETCH_SUCCEEDED', embedURL})
    } catch (e) {
        yield put({ type: 'RANDOM_FETCH_FAILED', message: e.message})
    }
}

export function* mySaga() {
    yield takeLatest('GIF_FETCH_REQUESTED', fetchGif)
    yield takeLatest('RANDOM_FETCH_REQUESTED', fetchRandomGif)
}