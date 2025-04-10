import React, { createContext } from 'react';
import RootStore from '../packages/app/store/RootStore';

let storeContext: React.Context<RootStore>;

export const createStoreContext = () => {
  storeContext = createContext(new RootStore());

  return storeContext;
};

export const getStoreContext = () => {
  if (!storeContext) {
    throw Error('Must create store context first!');
  }

  return storeContext;
};
