import { configureStore } from '@reduxjs/toolkit'
import  priceReducer  from './slices/priceSlice'
import hamburgerReducer from './slices/hamburgerSlice'

export const store = configureStore({
  reducer: {
    price: priceReducer,
    hamburger: hamburgerReducer
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
