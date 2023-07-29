export interface PasswordProps {
  isPasswordShown: string
}

export interface CoinProps {
  name: string
  symbol: string
  price: number
  icon: string
}

export interface CoinStoreProps {
  isOpenSignInModal: boolean
  setIsOpenSignInModal: (isOpenSignInModal: boolean) => void
  isOpenSignUpModal: boolean
  setIsOpenSignUpModal: (isOpenSignUpModal: boolean) => void
  coins: CoinProps[]
  setCoins: (coins: CoinProps[]) => void
  getCoins: () => void
}
