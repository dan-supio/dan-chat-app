import Chat from './Chat';
import Layout from 'antd/es/layout';
import React from 'react';
import styles from './ChatContainer.module.css';
import { observer } from 'mobx-react';

const ChatContainer: React.FC = () => {
  return (
    <Layout className={styles.container}>
      <Layout.Content>
        <div className={styles.chatContainer}>
          <Chat />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default observer(ChatContainer);
