import styles from "./RandomKeys.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMapArrowCodes } from "../../types"
import { PlaygroundStepsState } from "../../store/types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: PlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }

    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }

    return styles.icon
  }

  return (
    <div>
      <h3>Random keys</h3>
      {state.steps.length === 0 ? (
        <span>Hello</span>
      ) : (
        <>
          {state.steps.map((item) => (
            <span key={item.step} className={getStylesRandomKeys(item)}>
              {MAP_ARROW_CODES[item.currentValue as keyof IMapArrowCodes]}
            </span>
          ))}
        </>
      )}
    </div>
  )
}

export default RandomKeys
