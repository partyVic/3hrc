import { configureStore } from '@reduxjs/toolkit'
import { newsReducers } from './reducers/newsReducers'


const reducer = {
    newsList: newsReducers
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
})

export default store