import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import RecommendedScreen from '../../screens/Recommended/RecommendedScreen'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailsScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createSharedElementStackNavigator()
const RecommendedStack = () => {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="RecommendedScreen" component={RecommendedScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ImageDetails" component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
    </Stack.Navigator>
  )
}

export default RecommendedStack

const styles = StyleSheet.create({})