// import styles from "./Modal.module.css"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  return (
    <>
      <h3>Modal</h3>
      <button onClick={handleClose}>Start new game</button>
    </>
  )
}

export default Modal
