import ChatStore from '../../chat/store/ChatStore';

class RootStore {
  chatStore: ChatStore;

  constructor() {
    this.chatStore = new ChatStore(this);
  }
}

export default RootStore;
