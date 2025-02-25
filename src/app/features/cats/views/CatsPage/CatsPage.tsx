import { observer } from 'mobx-react-lite';
import React, { useCallback, useRef } from 'react';

import {
  Container,
  Header,
  SwiperWrapper,
  ButtonsWrapper,
  Button,
} from './CatsPage.elements';
import appStore from '../../../../App.store';
import debounce from 'lodash/debounce'
import CatCard from '../CatCard';
import Swiper from 'react-native-deck-swiper';
import CatModel from '../../store/CatModel';

const CatsPage: React.FC<{
}> = () => {
  const swiperRef = useRef<any>(null);
  
  const handleLikeButtonPress = useCallback(
    debounce(
      () => {
        swiperRef?.current?.swipeRight()
      },
      1000,
      {
        leading: false,
        trailing: true,
      },
    ),
    [],
  )

  const handleDislikeButtonPress = useCallback(
    debounce(
      () => {
        swiperRef?.current?.swipeLeft()
      },
      1000,
      {
        leading: false,
        trailing: true,
      },
    ),
    [],
  )

  const handleOnSwipeRight = useCallback(
    debounce(
      (index, catModel?: CatModel) => {
        if (catModel) {
          appStore.cats.vote(catModel.id)
        }
      },
      1000,
      {
        leading: false,
        trailing: true,
      },
    ),
    [],
  )
  

  const handleRenderCard = useCallback((card: CatModel, _index: number) => 
    (card ? <CatCard key={`${_index}_${card?.id}`} catData={card}/> : <></>)
  , [])
  

  return (
      <Container>
        <Header />

        <SwiperWrapper>
          <Swiper
            ref={swiperRef}
            cards={appStore.cats.catsList}
            renderCard={handleRenderCard}
            animateCardOpacity
            showSecondCard
            onSwipedRight={handleOnSwipeRight}
            stackSize={10}
            cardStyle={{ height: 400 }}
            stackSeparation={0}
            horizontalSwipe
            verticalSwipe={false} 
            disableBottomSwipe
            disableTopSwipe
          />
        </SwiperWrapper>

        <ButtonsWrapper>
          <Button source={require('../../../../../assets/cross.png')} onPress={handleDislikeButtonPress}/>
          <Button source={require('../../../../../assets/heart.png')} onPress={handleLikeButtonPress} />
        </ButtonsWrapper>
      </Container>
  );
};

export default observer(CatsPage);
