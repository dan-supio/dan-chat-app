import React from 'react';
import styles from './WaitingAnimation.module.css';
import { observer } from 'mobx-react';

const WaitingAnimation: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  );
};

export default observer(WaitingAnimation);
