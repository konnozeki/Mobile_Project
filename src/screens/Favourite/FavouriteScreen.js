import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import FavouriteContent from '../../components/Favourite/FavouriteContent'
import AndroidSafeArea from '../../Android/AndroidSafeArea'

const FavouriteScreen = ({route}) => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
          <View style = {{backgroundColor: 'white'}}>
            <FavouriteContent route={route}></FavouriteContent>
          </View>
    </SafeAreaView>

  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})