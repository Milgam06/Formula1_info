import { create } from "zustand";

interface IntervalStore {
  intervalStatus: boolean;
  switchIntervalStatus: () => void;
}

export const useIntervalStore = create<IntervalStore>((set) => ({
  intervalStatus: false,
  switchIntervalStatus: () =>
    set((status) => ({ intervalStatus: !status.intervalStatus })),
}));
