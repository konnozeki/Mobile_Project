import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import NewsContent from '../../components/News/NewsContent'

const NewsScreen = () => {
  return (
    <SafeAreaView>
      <NewsContent></NewsContent>
    </SafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})