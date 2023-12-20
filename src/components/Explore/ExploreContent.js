import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExploreImageList from "./ExploreImageList"
import Tab from '../Shared/Tab';
import { Camera, Illust, User } from '../../constants/icon';
const ExploreContent = () => {

  return (
    <View >
            <Tab item={tabs}></Tab>
    </View>
  )
}

export default ExploreContent

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'Illust',
        content: <ExploreImageList type='illust'/>,
        icon: Illust

    },
    {
        title: 'Photo',
        content: <ExploreImageList type='photo'/>,
        icon: Camera
    },
]