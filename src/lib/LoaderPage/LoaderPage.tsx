import { observer } from 'mobx-react-lite';
import React from 'react';

import {
  Container, Image,
} from './LoaderPage.elements';

const LoaderPage: React.FC<{
}> = () => {

  return (
    <Container>
      <Image source={require('../../assets/cat.png')}/>
    </Container>
  );
};

export default observer(LoaderPage);
