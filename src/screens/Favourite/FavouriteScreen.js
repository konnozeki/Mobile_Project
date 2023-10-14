import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import FavouriteContent from '../../components/Favourite/FavouriteContent'
import AndroidSafeArea from '../../Android/AndroidSafeArea'

const FavouriteScreen = () => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
          <View style = {{backgroundColor: 'white'}}>
            <FavouriteContent></FavouriteContent>
          </View>
    </SafeAreaView>

  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})