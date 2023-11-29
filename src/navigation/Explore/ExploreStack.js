import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import RecommendedScreen from '../../screens/Recommended/RecommendedScreen'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExploreScreen from '../../screens/Explore/ExploreScreen'
import ExploreDetail from '../../components/Explore/ExploreDetail'
import UserDetail from '../../components/User/UserDetail'
const Stack = createSharedElementStackNavigator()
const ExploreStack = ({route}) => {
  const {user} = route.params
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="ExploreScreen" initialParams={{user: user}} component={ExploreScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ExploreDetail" initialParams={{user: user}} component={ExploreDetail} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="ImageDetails" initialParams={{user: user}} component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="UserDetails" initialParams={{user: user}} component={UserDetail} options={{headerShown: false, useNativeDriver:true}}/>
    </Stack.Navigator>
  )
}

export default ExploreStack

const styles = StyleSheet.create({})