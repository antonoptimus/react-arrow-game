import { createSlice } from "@reduxjs/toolkit"
import type { PlaygroundState } from "./types"
import { ARR_ARROW_KEYS } from "../constants"

export const initialState: PlaygroundState = {
  currentStep: 0,
  steps: [],
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_KEYS.length)
      state.steps.push({
        currentValue: ARR_ARROW_KEYS[randomKeys],
        enteredValue: null
      })
    },
  },
})

export const { setCurrentStep, setSteps } = playgroundSlice.actions
export const playgroundReducer = playgroundSlice.reducer
