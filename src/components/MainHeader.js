import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  import { Ionicons } from '@expo/vector-icons';
  import {IconTab} from './IconTab';




const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container ,{marginTop: insets.top, }]}>
      <TouchableOpacity>
        <Ionicons name="ios-menu" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </TouchableOpacity>


    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '8%'
    },
    title: {
      paddingTop: '2%',
      fontSize: 25,
      fontWeight: 'bold'
    }
})