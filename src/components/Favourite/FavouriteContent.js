import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../Shared/Tab'
import FavouriteImageList from './FavouriteImageList'

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
        content: <FavouriteImageList></FavouriteImageList>
    },
    {
        title: 'Photograph',
        content: <Text>Photograph</Text>
    },
    {
        title: 'User',
        content: <Text>User</Text>
    },
]