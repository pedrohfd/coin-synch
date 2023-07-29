import { useState } from 'react'
import { useCoinStore } from '../../store/coin.store'

export const useSignInController = () => {
  const { setIsOpenSignInModal, setIsOpenSignUpModal, isOpenSignInModal } =
    useCoinStore()

  const [isPasswordShown, setIsPasswordShown] = useState('password')

  const handleShowPassword = () => {
    isPasswordShown === 'password'
      ? setIsPasswordShown('type')
      : setIsPasswordShown('password')
  }

  const handleOpenSignUpModal = () => {
    setIsOpenSignInModal(false)
    setIsOpenSignUpModal(true)
  }

  const handleCloseSignInModal = () => {
    setIsOpenSignInModal(false)
  }

  return {
    handleOpenSignUpModal,
    handleCloseSignInModal,
    isOpenSignInModal,
    handleShowPassword,
    isPasswordShown,
  }
}
