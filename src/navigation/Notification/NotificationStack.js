import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import NotificationScreen from '../../components/Notification/NotificationScreen'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailScreen'
import UserDetail from '../../components/User/UserDetail'
import SubmittedScreen from '../../screens/My Page/SubmittedScreen'
import ExploreDetail from '../../components/Explore/ExploreDetail'
const Stack = createSharedElementStackNavigator()
const NotificationStack = ({route}) => {
    const {user} = route.params
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name='NotificationScreen' initialParams={{user: user}} component={NotificationScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ImageDetails" initialParams={{user: user}} component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="ExploreDetail" initialParams={{user: user}} component={ExploreDetail} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="UserDetails" initialParams={{user: user}} component={UserDetail} options={{headerShown: false, useNativeDriver:true}}></Stack.Screen>
        <Stack.Screen name='SubmittedScreen' initialParams={{user: user}} component={SubmittedScreen} options={{headerShown: false, useNativeDriver:true}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default NotificationStack

const styles = StyleSheet.create({})