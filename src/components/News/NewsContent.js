import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../Shared/Tab'
import NewspaperList from "./NewspaperList"
import { Camera, Illust } from '../../constants/icon'

const NewsContent = () => {
  return (
    <View>
      <Tab item={tabs}></Tab>
    </View>
  )
}

export default NewsContent

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'Illust',
        content: <NewspaperList></NewspaperList>,
        icon: Illust
    },
    {
        title: 'Photograph',
        content: <Text>Photograph</Text>,
        icon: Camera
    },
]