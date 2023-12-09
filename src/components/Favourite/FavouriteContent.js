import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../Shared/Tab'

import { Camera, Illust, User } from '../../constants/icon'
import { useNavigation } from '@react-navigation/native'
import FavouriteImageList from './FavouriteImageList'
import NavigationHeader from '../../navigation/Shared/NavigationHeader'

const FavouriteContent = ({route}) => {
  const {user} = route.params
  const navigation = useNavigation()
  const tabs = [
    {
        title: 'Illust',
        content: <FavouriteImageList type={"illust"} user={user}></FavouriteImageList>,
        icon: Illust,
        type: 'illust'
    },
    {
        title: 'Photo',
        content: <FavouriteImageList type={"photo"} user={user}></FavouriteImageList>,
        icon: Camera,
        type: 'photo'
    },
    {
        title: 'User',
        content: <Text>User</Text>,
        icon: User
    },
]
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
        <NavigationHeader navigation={navigation}></NavigationHeader>
        <Tab item={tabs}></Tab>

    </View>

  )
}

export default FavouriteContent

const styles = StyleSheet.create({})

