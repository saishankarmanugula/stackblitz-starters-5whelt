import { create, createStore } from 'zustand';

export const useLocationStore = create(() => ({
  locationTypeValue: 'Residence',
}));

export const setLocationType = (value) =>
  useLocationStore.setState(() => ({ locationTypeValue: value }));

export const createLocationStore = (
  initState = { locationTypeValue: 'Residence' }
) => {
  return createStore()((set) => ({
    ...initState,
    setLocationType: (value) =>
      set((state) => ({
        ...state,
        locationTypeValue: value,
      })),
  }));
};
