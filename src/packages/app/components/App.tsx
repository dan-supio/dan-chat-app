import React from 'react';
import styles from './App.module.css';
import { createStoreContext } from '../../../contexts/StoreContext';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  createStoreContext();

  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default App;
