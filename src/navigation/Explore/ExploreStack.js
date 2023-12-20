import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailScreen'
import ExploreScreen from '../../screens/Explore/ExploreScreen'
import ExploreDetail from '../../components/Explore/ExploreDetail'
import UserDetail from '../../components/User/UserDetail'
import SubmittedScreen from '../../screens/My Page/SubmittedScreen'
const Stack = createSharedElementStackNavigator()
const ExploreStack = ({route}) => {
  const {user} = route.params
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="ExploreScreen" initialParams={{user: user}} component={ExploreScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ExploreDetail" initialParams={{user: user}} component={ExploreDetail} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="ImageDetails" initialParams={{user: user}} component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="UserDetails" initialParams={{user: user}} component={UserDetail} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name='SubmittedScreen' component={SubmittedScreen} initialParams={{user: user}} options={{headerShown: false, useNativeDriver:true}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ExploreStack

const styles = StyleSheet.create({})