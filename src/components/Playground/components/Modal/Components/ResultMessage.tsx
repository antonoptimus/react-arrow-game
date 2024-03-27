import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congrats! You win
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          Unfortunately, you lost
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
