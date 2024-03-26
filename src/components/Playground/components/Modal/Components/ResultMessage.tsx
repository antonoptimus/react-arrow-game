// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div>
      {isSuccessEndGame ? (
        <span>Congrats! You won</span>
      ) : (
        <span>Unfortunately, you lost</span>
      )}
    </div>
  )
}

export default ResultMessage
