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
        step: state.currentStep,
        currentValue: ARR_ARROW_KEYS[randomKeys],
        enteredValue: null,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSuccess = step.currentValue === action.payload

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          }
        }
       }
    },
  },
})

export const { setCurrentStep, setSteps, setEnteredValue } =
  playgroundSlice.actions
export const playgroundReducer = playgroundSlice.reducer
