import styles from "./RandomArrows.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { PlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

const RandomArrows: React.FC = () => {
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
    <>
      {state.steps.map((item) => (
        <span key={item.step} className={getStylesRandomKeys(item)}>
          {MAP_ARROW_CODES[item.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
