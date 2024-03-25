import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep } from "./store/slices"
import Controls from "./components/Controls"

const Playground: React.FC = () => {
  const { currentStep } = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  return (
    <>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
    </>
  )
}

export default Playground
