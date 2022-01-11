import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadorScreen } from './src/screens/CalculadorScreen';
import { appTheme } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={appTheme.fondo}>
      <StatusBar 
        backgroundColor="black"
        barStyle="light-content"  
      />
      <CalculadorScreen/>
    </SafeAreaView>
    
  )
}

export default App;
