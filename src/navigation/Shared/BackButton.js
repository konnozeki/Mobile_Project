import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeftArrow, SmallLeftArrow } from "./../../constants/icon";
const BackButton = ({navigation, small=false}) => {
  return (
    <TouchableOpacity onPress={navigation.goBack}>
          {small ? SmallLeftArrow: LeftArrow}
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})