import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from "../../navigation/Shared/BackButton";

const NavigationHeader = ({navigation, title, author}) => {
  return (
      <View style={{flexDirection: "row", marginHorizontal: "5%", marginVertical: "2%",}}>
        <BackButton navigation = {navigation}></BackButton>
        <View style={{ marginHorizontal: "3%" }}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
  )
}

export default NavigationHeader

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
      },
})