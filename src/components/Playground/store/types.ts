export interface PlaygroundStepsState {
  currentValue: string
}

export interface PlaygroundState {
  currentStep: number
  steps: PlaygroundStepsState[]
}
