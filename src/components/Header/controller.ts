import { useCoinStore } from '../../store/coin.store'

export const useHeaderController = () => {
  const { setIsOpenSignInModal, setIsOpenSignUpModal } = useCoinStore()

  const handleOpenSignInModal = () => {
    setIsOpenSignInModal(true)
  }

  const handleOpenSignUpModal = () => {
    setIsOpenSignUpModal(true)
  }

  return {
    handleOpenSignInModal,
    handleOpenSignUpModal,
  }
}
