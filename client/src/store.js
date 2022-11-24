import { configureStore } from '@reduxjs/toolkit'


const reducer = {

}

const preloadedState = {
    user: {
        name: 'partyVic'
    }
}


export default configureStore({
    reducer,
    preloadedState,
})