import { getStoreContext } from '../contexts/StoreContext';
import { useContext } from 'react';

export const useStores = () => useContext(getStoreContext());
