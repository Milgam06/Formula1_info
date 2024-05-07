import { create } from "zustand";

interface IntervalStore {
  intervalStatus: boolean;
  falseIntervalStatus: () => void;
  trueIntervalStatus: () => void;
}

export const useIntervalStore = create<IntervalStore>((set) => ({
  intervalStatus: false,
  falseIntervalStatus: () =>
    set((status) => ({ intervalStatus: (status.intervalStatus = false) })),
  trueIntervalStatus: () =>
    set((status) => ({ intervalStatus: (status.intervalStatus = true) })),
}));
