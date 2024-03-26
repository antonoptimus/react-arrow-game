// import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (MAP_ARROW_CODES.hasOwnProperty(e.key)) {
      console.log(e.key)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return <div>KeyPressed</div>
}

export default KeyPressed
