import { create } from 'zustand'

const useCount = create((set, get) => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 })),
}))

export default useCount;
