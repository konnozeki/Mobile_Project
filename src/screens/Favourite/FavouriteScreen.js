import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FavouriteContent from '../../components/Favourite/FavouriteContent'
import AndroidSafeArea from '../../Android/AndroidSafeArea'

const FavouriteScreen = ({route}) => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
          <View >
            <FavouriteContent route={route}></FavouriteContent>
          </View>
    </SafeAreaView>

  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})