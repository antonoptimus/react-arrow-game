export interface PlaygroundStepsState {
  currentValue: string | null
  enteredValue: string | null
}

export interface PlaygroundState {
  currentStep: number
  steps: PlaygroundStepsState[]
}
