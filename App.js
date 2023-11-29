
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Sending']);

const App = () => {
  
  return <MainNavigator /> 

}


export default App