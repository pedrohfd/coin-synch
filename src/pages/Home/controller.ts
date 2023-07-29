import { useCoinStore } from '../../store/coin.store'
import { useMotionValue, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usersApi } from '../../server/api'

export const useHomeController = () => {
  const { setIsOpenSignUpModal } = useCoinStore()
  const { scrollY } = useScroll()
  const [scroll, setScroll] = useState(0)
  const imageOpacity1 = useMotionValue(1)
  const imageOpacity2 = useMotionValue(0.5)
  const imageOpacity3 = useMotionValue(0.5)

  scrollY.on('change', (value) => {
    handleScroll(value)
  })

  const handleOpenSignUpModal = () => {
    setIsOpenSignUpModal(true)
  }

  const handleScroll = (value: number) => {
    if (value >= 0 && value <= 99) {
      setScroll(0)
      imageOpacity1.set(1)
      imageOpacity2.set(0.5)
      imageOpacity3.set(0.5)
    }
    if (value >= 100 && value <= 199) {
      setScroll(-400)
      imageOpacity1.set(0.5)
      imageOpacity2.set(1)
      imageOpacity3.set(0.5)
    }
    if (value >= 200) {
      setScroll(-800)
      imageOpacity1.set(0.5)
      imageOpacity2.set(0.5)
      imageOpacity3.set(1)
    }
  }

  const handleGetUsers = async () => {
    const response = await usersApi.get('users')

    console.log(response)
  }

  useEffect(() => {
    handleGetUsers()
  }, [])

  return {
    handleOpenSignUpModal,
    scroll,
    imageOpacity1,
    imageOpacity2,
    imageOpacity3,
  }
}
