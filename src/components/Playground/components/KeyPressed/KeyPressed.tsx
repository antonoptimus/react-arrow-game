// import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  const keyPressedElement = useKeyPressedElement()

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [handleKeydown])

  return (
    <div>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <TypographyText>
        Press the key corresponding to the key in "Random keys"
      </TypographyText>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
