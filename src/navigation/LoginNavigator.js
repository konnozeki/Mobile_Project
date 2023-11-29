import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/User/LoginScreen'
import RegisterScreen from '../screens/User/RegisterScreen'
import { useNavigation } from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
const Stack = createSharedElementStackNavigator()


const LoginNavigator = () => {
  const navigation = useNavigation();
  return <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        </Stack.Navigator>
}

export default LoginNavigator

const styles = StyleSheet.create({})