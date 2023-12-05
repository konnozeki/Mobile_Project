import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import RecommendedScreen from '../../screens/Recommended/RecommendedScreen'
import ImageInputForm from '../../components/My Page/ImageInputForm'
import MyPageScreen from '../../screens/My Page/MyPageScreen'
import UserDetail from '../../components/User/UserDetail'
import ImageDetail from '../../components/Image Detail/ImageDetail'
import SubmittedScreen from '../../screens/My Page/SubmittedScreen'
import FavouriteScreen from '../../screens/Favourite/FavouriteScreen'
const Stack = createSharedElementStackNavigator()
const MyPageStack = ({route}) => {
  const {user} = route.params
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="MyPageScreen" initialParams={{user:user}} component={MyPageScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="SubmittedScreen" initialParams={{user:user}} component={SubmittedScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name='FavouriteScreen' initialParams={{user: user}} component={FavouriteScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="UserDetails" initialParams={{user:user}} component={UserDetail} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ImageInputForm" initialParams={{user:user}} component={ImageInputForm} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name='ImageDetails' initialParams={{user:user}} component={ImageDetail} options={{headerShown: false, useNativeDriver:true}}/>
    </Stack.Navigator>
  )
}

export default MyPageStack

const styles = StyleSheet.create({})