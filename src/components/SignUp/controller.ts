import { useState } from 'react'
import { useCoinStore } from '../../store/coin.store'

export const useSignUpController = () => {
  const { setIsOpenSignInModal, setIsOpenSignUpModal, isOpenSignUpModal } =
    useCoinStore()

  const [isPasswordShown, setIsPasswordShown] = useState('password')
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] =
    useState('password')

  const handleShowPassword = () => {
    isPasswordShown === 'password'
      ? setIsPasswordShown('type')
      : setIsPasswordShown('password')
  }

  const handleShowConfirmPassword = () => {
    isConfirmPasswordShown === 'password'
      ? setIsConfirmPasswordShown('type')
      : setIsConfirmPasswordShown('password')
  }

  const handleOpenSignInModal = () => {
    setIsOpenSignUpModal(false)
    setIsOpenSignInModal(true)
  }

  const handleCloseSignUpModal = () => {
    setIsOpenSignUpModal(false)
  }

  return {
    handleOpenSignInModal,
    handleCloseSignUpModal,
    isOpenSignUpModal,
    handleShowPassword,
    handleShowConfirmPassword,
    isPasswordShown,
    isConfirmPasswordShown,
  }
}
