import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import BackButton from '../../navigation/Shared/BackButton'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import ExploreSearch from './ExploreSearch'
import Tab from '../Shared/Tab'
import ExploreImageList from "./ExploreImageList"
import { Camera, Illust, User } from '../../constants/icon';
import ImageList from '../Shared/ImageList'

const ExploreDetail = ({navigation, route}) => {
    const {user, hashtag} = route.params
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
        <View style={{backgroundColor: 'white' , marginBottom: '19%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <BackButton navigation={navigation}></BackButton>
                <ExploreSearch icon={false} content={hashtag}></ExploreSearch>          
            </View>
            <Tab item={tabs} icon={false}></Tab>
        </View>
    </SafeAreaView>
  )
}

export default ExploreDetail

const styles = StyleSheet.create({})

const tabs = [
    {
        title: 'New',
        content: <ImageList/>,
        text: {
            active: <Text style={{color: 'white', paddingVertical: 4}}>New</Text>,
            inactive: <Text style={{color: 'gray', paddingVertical: 4}}>New</Text>
        }

    },
    {
        title: 'Popular',
        content: <Text>Test</Text>,
        text: {
            active: <Text style={{color: 'white', paddingVertical: 4}}>Popular</Text>,
            inactive: <Text style={{color: 'gray', paddingVertical: 4}}>Popular</Text>
        }
    },

]