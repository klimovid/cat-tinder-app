import { observer } from 'mobx-react-lite';
import React from 'react';

import {
  Container,
  Image,
  InfoWrapper,
  Count,
  Title,
  SubTitle,
} from './CatCard.elements';
import CatModel from '../../store/CatModel';

const CatCard: React.FC<{
  catData: CatModel
}> = (props) => {
  return (
    <Container>
      <Image
        source={{
          uri: props.catData.imageUrl,
        }}
      />

      <InfoWrapper>
        <Count>{props.catData.intelligenceLevel}</Count>
        <Title>{props.catData.name}</Title>
        <SubTitle>{props.catData.origin}</SubTitle>
      </InfoWrapper>
    </Container>
  );
};

export default React.memo(observer(CatCard), () => true);
