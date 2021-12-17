import React from 'react';
import StyledText from '../atoms/StyledText';
import ScreenContainer from "../atoms/ScreenContainer";
import StyledButton from "../atoms/StyledButton";


const Game = ({ navigation } ) => (
    <ScreenContainer>
      <StyledText>Game</StyledText>
      <StyledButton title="Main Menu" onPress={() => navigation.navigate('Home')}/>
    </ScreenContainer>
  )

export default Game
