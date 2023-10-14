import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderNavigationBar = () => {
  return (
    <View style = {{marginVertical: '3%', alignItems:'center'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 16}}>Article</Text>
    </View>
  )
}

export default HeaderNavigationBar

const styles = StyleSheet.create({})