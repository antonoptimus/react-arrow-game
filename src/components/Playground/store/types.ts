export interface PlaygroundStepsState {
  step: number,
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface PlaygroundState {
  currentStep: number
  steps: PlaygroundStepsState[]
}
