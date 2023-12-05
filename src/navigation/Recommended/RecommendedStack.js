import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import RecommendedScreen from '../../screens/Recommended/RecommendedScreen'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailScreen'
import UserDetail from '../../components/User/UserDetail'
import SubmittedScreen from '../../screens/My Page/SubmittedScreen'
const Stack = createSharedElementStackNavigator()
const RecommendedStack = ({route}) => {
  const {user} = route.params 
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="RecommendedScreen" initialParams={{user: user}} component={RecommendedScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ImageDetails" initialParams={{user: user}} component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="UserDetails" initialParams={{user: user}} component={UserDetail} options={{headerShown: false, useNativeDriver:true}}></Stack.Screen>
        <Stack.Screen name='SubmittedScreen' initialParams={{user: user}} component={SubmittedScreen} options={{headerShown: false, useNativeDriver:true}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default RecommendedStack

const styles = StyleSheet.create({})