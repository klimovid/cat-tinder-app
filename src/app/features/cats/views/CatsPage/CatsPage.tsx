import { observer } from 'mobx-react-lite';
import React, { useCallback, useRef } from 'react';

import {
  Container,
  Header,
  SwiperWrapper,
  ButtonsWrapper,
  Button,
} from './CatsPage.elements';
//import appStore from '../../../../App.store';
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
      (cardId) => {
        //appStore.cats.vote(cardId)
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
            cards={[{
              id: "abys",
              weight:{
                  imperial:"7  -  10",
                  metric:"3 - 5"
              },
              name:"Abyssinian",
              temperament:"Active, Energetic, Independent, Intelligent, Gentle",
              origin:"Egypt",
              country_codes:"EG",
              country_code:"EG",
              life_span:"14 - 15",
              wikipedia_url:"https://en.wikipedia.org/wiki/Abyssinian_(cat)",
              imageUrl: 'https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A='
            },
            {
              id: "afdsfdadsa",
              weight:{
                  imperial:"7  -  10",
                  metric:"3 - 5"
              },
              name:"JKDLJFLKJFKLSAJDLK",
              temperament:"Active, Energetic, Independent, Intelligent, Gentle",
              origin:"DJKFJKFJKDFJKJFDK",
              country_codes:"EG",
              country_code:"EG",
              life_span:"3 - 90",
              wikipedia_url:"https://en.wikipedia.org/wiki/Abyssinian_(cat)",
              imageUrl: 'https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A='
            }
        ]}
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
            useNativeDriver
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
