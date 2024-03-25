import { createSlice } from "@reduxjs/toolkit"
import type { PlaygroundState } from "./types"

export const initialState: PlaygroundState = {
  currentStep: 0,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
  },
})

export const { setCurrentStep } = playgroundSlice.actions
export const playgroundReducer = playgroundSlice.reducer
