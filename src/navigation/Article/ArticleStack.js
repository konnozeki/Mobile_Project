import { StyleSheet} from 'react-native'
import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import ArticleDetail from '../../components/News/ArticleDetail'
import NewsScreen from '../../screens/News/NewsScreen'
import ImageDetailsScreen from '../../screens/Image Details/ImageDetailScreen'
import UserDetail from '../../components/User/UserDetail'
const Stack = createSharedElementStackNavigator()
const ArticleStack = ({route}) => {
  const {user} = route.params
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="NewsScreen" initialParams={{user:user}} component={NewsScreen} options={{headerShown:false, useNativeDriver:true }}></Stack.Screen>
        <Stack.Screen name="ArticleDetails" initialParams={{user:user}} component={ArticleDetail} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="ImageDetails" initialParams={{user:user}} component={ImageDetailsScreen} options={{headerShown: false, useNativeDriver:true}}/>
        <Stack.Screen name="UserDetails" initialParams={{user:user}} component={UserDetail} options={{headerShown: false, useNativeDriver:true}}/>
       

    </Stack.Navigator>
  )
}

export default ArticleStack

const styles = StyleSheet.create({})