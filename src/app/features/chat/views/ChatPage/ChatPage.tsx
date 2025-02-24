import { observer } from 'mobx-react-lite';
import React from 'react';

import {
  Container, Label
} from './ChatPage.elements';

const ChatPage: React.FC<{
}> = () => {
  return (
    <Container>
      <Label>Chat</Label>
    </Container>
  );
};

export default observer(ChatPage);
