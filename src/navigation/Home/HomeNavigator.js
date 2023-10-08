import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import HomeScreen from '../../screens/Home/HomeScreen'
const Stack = createSharedElementStackNavigator()
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})