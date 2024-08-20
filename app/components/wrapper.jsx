'use client';

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createLocationStore } from './store';

export const LocationStoreContext = createContext(undefined);

export const Wrapper = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createLocationStore();
  }

  return (
    <LocationStoreContext.Provider value={storeRef.current}>
      {children}
    </LocationStoreContext.Provider>
  );
};

export const useLocationStore = (selector) => {
  const locationStoreContext = useContext(LocationStoreContext);

  if (!locationStoreContext) {
    throw new Error(`Error`);
  }

  return useStore(locationStoreContext, selector);
};
