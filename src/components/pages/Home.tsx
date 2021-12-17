import React from 'react';
import ScreenContainer from "../atoms/ScreenContainer";
import StyledText from '../atoms/StyledText';
import StyledButton from '../atoms/StyledButton';

const Home = ({ navigation } ) => (
    <ScreenContainer>
      <StyledText>Home</StyledText>
      <StyledButton title="Start" onPress={() => navigation.navigate('Game')}/>
    </ScreenContainer>
  );

export default Home;
