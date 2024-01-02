import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import BackButton from '../../navigation/Shared/BackButton'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import ExploreSearch from './ExploreSearch'
import Tab from '../Shared/Tab'
import ExploreImageList from "./ExploreImageList"
import { Camera, Illust, User } from '../../constants/icon';
import ImageList from '../Shared/ImageList'
import SearchImageList from './SearchImageList'
import SearchImageListRecent from './SearchImageListRecent'

const ExploreDetail = ({navigation, route}) => {


    const {user, hashtag, type} = route.params
    const tabs = [
        {
            title: 'New',
            content: <SearchImageListRecent user={user} type={type} hashtag={hashtag}/>,
            text: {
                active: <Text style={{color: 'white', paddingVertical: 4}}>New</Text>,
                inactive: <Text style={{color: 'gray', paddingVertical: 4}}>New</Text>
            }
    
        },
        {
            title: 'Popular',
            content: <SearchImageList user={user} type={type} hashtag={hashtag}/>,
            text: {
                active: <Text style={{color: 'white', paddingVertical: 4}}>Popular</Text>,
                inactive: <Text style={{color: 'gray', paddingVertical: 4}}>Popular</Text>
            }
        },
    
    ]
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
        <View style={{backgroundColor: 'white' , marginBottom: '19%'}}>
            <ExploreSearch user={user} type={type} navigation={navigation} icon={false} hashtag={hashtag}></ExploreSearch>          
            <Tab item={tabs} icon={false}></Tab>
        </View>
    </SafeAreaView>
  )
}

export default ExploreDetail

const styles = StyleSheet.create({})

