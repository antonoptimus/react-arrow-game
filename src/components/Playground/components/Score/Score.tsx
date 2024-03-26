// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <h3>Score</h3>
      <span>Succesful: {state.totalSuccessful}</span>
      <br />
      <span>Error: {state.totalUnsuccessful}</span>
    </>
  )
}

export default Score
