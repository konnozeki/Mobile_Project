import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../Shared/Tab'

import { Camera, Illust, User } from '../../constants/icon'
import ImageList from '../Shared/ImageList'

const FavouriteContent = ({route}) => {
  const tabs = [
    {
        title: 'Illust',
        content: <ImageList route={route}></ImageList>,
        icon: Illust
    },
    {
        title: 'Photo',
        content: <Text>Photo</Text>,
        icon: Camera
    },
    {
        title: 'User',
        content: <Text>User</Text>,
        icon: User
    },
]
  return (
    <Tab item={tabs}></Tab>
  )
}

export default FavouriteContent

const styles = StyleSheet.create({})

