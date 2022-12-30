import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPlaySlice {
  playName: string
  valueHits: number
  valueMoves: number
}

const initialState: IPlaySlice = {
  playName: '',
  valueHits: 0,
  valueMoves: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayName: (state, action: PayloadAction<string>) => {
      state.playName = action.payload
    },
    setMoves: (state) => {
      state.valueMoves += 1
    },
    setHits: (state) => {
      state.valueHits += 1
    },
  },
})

export const { setPlayName, setHits, setMoves } = gameSlice.actions
export default gameSlice.reducer
