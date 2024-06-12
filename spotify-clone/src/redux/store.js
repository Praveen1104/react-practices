import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {spotifyapi} from './services/spotify'
export const store=configureStore({
reducer:{
    [spotifyapi.reducerPath]: spotifyapi.reducer,
},
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(spotifyapi.middleware)
})