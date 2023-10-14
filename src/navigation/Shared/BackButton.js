import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeftArrow } from "./../../constants/icon";
const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.goBack}>
          {LeftArrow}
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})