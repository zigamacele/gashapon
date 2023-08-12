import { TableControlsState } from '@/types/zustand'
import { create } from 'zustand'

const useMonthlyTableControls = create<TableControlsState>()((set) => ({
  pinned: JSON.parse(window.localStorage.getItem('pinned') ?? '[]') as number[],
  removed: JSON.parse(
    window.localStorage.getItem('removed') ?? '[]',
  ) as number[],
  sortAscending: false,
  showPinned: false,
  showEditSection: false,
  showCombinedRevenue: false,

  toggle: (prop: string) =>
    set((state) => ({ [prop]: !state[prop as keyof TableControlsState] })),

  setState: (prop: string, value: number) =>
    set((state) => {
      const propType = prop as keyof TableControlsState

      const stateArray = state[propType] as number[]
      if (stateArray.includes(value)) {
        const filteredState = stateArray.filter((item) => item !== value)
        localStorage.setItem(prop, JSON.stringify(filteredState))

        return { [propType]: filteredState }
      }

      const updatedState = [...(state[propType] as number[]), value]
      localStorage.setItem(prop, JSON.stringify(updatedState))
      return {
        [prop]: updatedState,
      }
    }),
}))

export default useMonthlyTableControls
