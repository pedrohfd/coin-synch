import { create } from 'zustand'

export const useCoinStore = create((set) => ({
  coins: [],
  setCoins: (coins: []) => set({ coins }),
  getCoins: () => {},
}))
