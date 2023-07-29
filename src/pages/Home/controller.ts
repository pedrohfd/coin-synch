import { useCoinStore } from '../../store/coin.store'
import { useMotionValue, useScroll, scroll as test } from 'framer-motion'
import { useState } from 'react'

export const useHomeController = () => {
  const { setIsOpenSignUpModal } = useCoinStore()

  const handleOpenSignUpModal = () => {
    setIsOpenSignUpModal(true)
  }

  fetch('http://localhost:3000/users').then((response) =>
    console.log(response.json()),
  )

  const [scroll, setScroll] = useState(0)

  const { scrollY } = useScroll()

  scrollY.on('change', (value) => {
    handleScroll(value)
    test((progress) => console.log(progress))
  })

  const imageOpacity1 = useMotionValue(1)
  const imageOpacity2 = useMotionValue(0.5)
  const imageOpacity3 = useMotionValue(0.5)

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

  return {
    handleOpenSignUpModal,
    scroll,
    imageOpacity1,
    imageOpacity2,
    imageOpacity3,
  }
}
