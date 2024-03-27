// import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <TypographyText>Congrats! You win</TypographyText>
  ) : (
    <TypographyText>Unfortunately, you lost</TypographyText>
  )
}

export default ResultMessage
