import { configureStore } from '@reduxjs/toolkit'
import playSlice from './game/gameSlice'

export const store = configureStore({
  reducer: {
    game: playSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
