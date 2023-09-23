import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Pictures Ranking</Text>
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '8%',
        paddingVertical: '8%'
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        
    }
})