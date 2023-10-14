import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import NewsContent from '../../components/News/NewsContent'
import AndroidSafeArea from '../../Android/AndroidSafeArea'

const NewsScreen = () => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
      <View style = {{backgroundColor: 'white'}}>
      <NewsContent></NewsContent>
      </View>
    </SafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})