import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollTab from '../Shared/ScrollTab'
import ArticleList from "./ArticleList"

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
        content: <ArticleList></ArticleList>
    },
    {
        title: 'Photograph',
        content: <Text>Photograph</Text>
    },
]