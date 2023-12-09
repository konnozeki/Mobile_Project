import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationHeader from '../../navigation/Shared/NavigationHeader'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import { useNavigation } from '@react-navigation/native';
import Tab from '../../components/Shared/Tab';
import ImageList from '../../components/Shared/ImageList';
import { Camera, Illust } from '../../constants/icon'
import SubmittedImageList from '../../components/My Page/SubmittedImageList';

const SubmittedScreen = ({route}) => {
  const navigation = useNavigation()
  const {user, author} = route.params
  const tabs = [
    {
        title: 'Illust',
        content: <SubmittedImageList key={1} type={'illust'} route={route}></SubmittedImageList>,
        icon: Illust
    },
    {
        title: 'Photo',
        content: <SubmittedImageList key={2} type={'photo'} route={route}></SubmittedImageList>,
        icon: Camera
    },
  ]
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
        <View style={{backgroundColor: 'white'}}>
        <NavigationHeader author={author !== undefined?author:user.username} title={'Submitted Posts'} navigation={navigation}></NavigationHeader>
        <Tab item={tabs}></Tab>
        </View>
    </SafeAreaView>

  )
}

export default SubmittedScreen

const styles = StyleSheet.create({})

