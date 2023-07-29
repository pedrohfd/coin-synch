import { create } from 'zustand'
import { CoinProps, CoinStoreProps } from '../types/types'

export const useCoinStore = create<CoinStoreProps>((set) => ({
  isOpenSignInModal: false,
  setIsOpenSignInModal: (isOpenSignInModal: boolean) =>
    set({ isOpenSignInModal }),
  isOpenSignUpModal: false,
  setIsOpenSignUpModal: (isOpenSignUpModal: boolean) =>
    set({ isOpenSignUpModal }),
  coins: [],
  setCoins: (coins: CoinProps[]) => set({ coins }),
  getCoins: () => {},
}))
