import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExploreImageList from "./ExploreImageList"
import Tab from '../Shared/Tab';
const ExploreContent = () => {
  return (
    <View>
            <Tab item={tabs}></Tab>
    </View>
  )
}

export default ExploreContent

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'Illust',
        content: <ExploreImageList/>

    },
    {
        title: 'Photograph',
        content: <Text>Test</Text>
    },
    {
        title: 'User',
        content: <ExploreImageList/>
    },
]