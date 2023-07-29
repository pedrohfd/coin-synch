import { useCoinStore } from '../../store/coin.store'

export const useHeaderController = () => {
  const { setIsOpenSignInModal, setIsOpenSignUpModal } = useCoinStore()

  const handleOpenSignInModal = () => {
    setIsOpenSignInModal(true)
  }

  const handleOpenSignUpModal = () => {
    setIsOpenSignUpModal(true)
  }

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about')

    if (aboutSection) {
      window.scrollTo({ top: aboutSection.offsetTop, behavior: 'smooth' })
    }
  }

  const handleScrollToTopCryptos = () => {
    const topCryptosSection = document.getElementById('top-cryptos')

    if (topCryptosSection) {
      window.scrollTo({ top: topCryptosSection.offsetTop, behavior: 'smooth' })
    }
  }

  return {
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleScrollToAbout,
    handleScrollToTopCryptos,
  }
}
