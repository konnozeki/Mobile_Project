import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const IconTab = ({iconName, onPress, styles, focused}) => {
  const image = (
    <AntDesign name={iconName} size={24} color={focused ? "black" : "gray"} focused={focused}/>
  )
  return image
}

export default IconTab

const styles = StyleSheet.create({})
