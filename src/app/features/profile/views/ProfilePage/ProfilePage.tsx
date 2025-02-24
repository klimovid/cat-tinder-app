import { observer } from 'mobx-react-lite';
import React from 'react';

import {
  Container, Label,
} from './ProfilePage.elements';

const ProfilePage: React.FC<{
}> = () => {

  return (
   <Container>
     <Label>
       Profile
     </Label>
    </Container>
  );
};

export default observer(ProfilePage);
