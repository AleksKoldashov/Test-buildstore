import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slicer/userSlicer'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})