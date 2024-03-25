// import styles from "./RandomKeys.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMapArrowCodes } from "../../types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((item, index) => (
        <span key={index}>
          {MAP_ARROW_CODES[item.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
