import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import {
  Container,
  Header,
  ButtonsWrapper,
} from './CatsPage.elements';

const CatPage: React.FC<{
}> = () => {

  return (
      <Container>
        <Header />


        <ButtonsWrapper>
        </ButtonsWrapper>
      </Container>
  );
};

export default observer(CatPage);
