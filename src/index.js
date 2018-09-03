import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import { fetchCreator, randomFetchCreator } from './actionCreators/index'
import { reducer } from './reducers/index'
import { mySaga } from './sagas/mySaga'
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

const mapStateToProps = state => ({
    embedURL: state.embedURL
})

const mapDispatchToProps = dispatch => ({
    fetchGif: string => dispatch(fetchCreator(string)),
    randomGif: () => dispatch(randomFetchCreator())
})

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(<Provider store={store} >
                    <Container />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
