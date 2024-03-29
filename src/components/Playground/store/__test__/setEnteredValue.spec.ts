import { ARR_ARROW_KEYS } from "../../constants"
import {
  initialState,
  playgroundReducer,
  setCurrentStep,
  setEnteredValue,
  setSteps,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ARR_ARROW_KEYS[0]

    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccessful).toBe(0)
    expect(setStepsState.totalUnsuccessful).toBe(0)
  })
})
