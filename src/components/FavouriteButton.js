import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconTab from './IconTab'
import { AntDesign } from '@expo/vector-icons'; 
import { Favourite } from '../constants/icon';

const FavouriteButton = ({active, style}) => {
  return (
    <View style={[{backgroundColor: 'white', padding: 4}, style]}>
      {active ? Favourite['filled'] : Favourite['active']}
    </View>
  )
}

export default FavouriteButton

const styles = StyleSheet.create({})