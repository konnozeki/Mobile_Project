import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollTab from '../Shared/ScrollTab'
import NewspaperList from "./NewspaperList"

const NewsContent = () => {
  return (
    <View>
      <ScrollTab item={tabs}></ScrollTab>
    </View>
  )
}

export default NewsContent

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'Illust',
        content: <NewspaperList></NewspaperList>
    },
    {
        title: 'Photograph',
        content: <Text>Photograph</Text>
    },
]