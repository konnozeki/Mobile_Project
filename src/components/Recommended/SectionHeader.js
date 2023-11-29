import { Dimensions, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/*<Button title={buttonTitle}></Button>*/}
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: '8%',
      marginVertical: '4%'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
})