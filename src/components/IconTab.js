import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'; 


const IconTab = ({iconName, type, focused, size=24}) => {
  let Tab = AntDesign
  if (type === "AntDesign") {
    Tab = AntDesign;
  } else {
    Tab = Ionicons;
  }
    
  const image = (
    <Tab name={iconName} size={size} color={focused ? "black" : "gray"} focused={focused}/>
  )
  return image
}

export default IconTab

const styles = StyleSheet.create({})
