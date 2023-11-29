import { StyleSheet, Text, View, SafeAreaView , Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import MyPageDetail from '../../components/My Page/MyPageDetail'
const height = Dimensions.get('screen').height
const MyPageScreen = ({route}) => {
  return (
    <MyPageDetail route={route}></MyPageDetail>
  )
}

export default MyPageScreen

const styles = StyleSheet.create({})