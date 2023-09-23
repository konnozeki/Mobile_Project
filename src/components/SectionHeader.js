import { Dimensions, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={buttonTitle}></Button>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: width * 0.08,
      marginTop: width * 0.04,
      marginBottom: 10
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
})