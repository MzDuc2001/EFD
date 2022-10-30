import create from 'zustand';

export const useTest = create<testHook>(set => ({
  count: 0,
  increase: () => set(state => ({count: state.count + 1})),
}));
