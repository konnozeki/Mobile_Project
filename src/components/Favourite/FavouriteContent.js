import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../Shared/Tab'
import FavouriteImageList from './FavouriteImageList'
import { Camera, Illust, User } from '../../constants/icon'

const FavouriteContent = () => {
  return (
    <Tab item={tabs}></Tab>
  )
}

export default FavouriteContent

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'Illust',
        content: <FavouriteImageList></FavouriteImageList>,
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