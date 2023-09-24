import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { LeftArrow } from '../constants/icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const ImageDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {imageDetail} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
      <View style={{marginTop: insets.top, flexDirection: 'row', paddingHorizontal: '8%'}}>
      <TouchableOpacity onPress={navigation.goBack}>
        {LeftArrow}
      </TouchableOpacity>
      </View>
      
      
        <Image source={imageDetail.image} style={[styles.image]}/>
      
      
      </View>
    </View>
    
  )
}



export default ImageDetailsScreen
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    height: windowHeight * 0.5,
    width: windowWidth
  },
  imageBox: {
    borderRadius: 8,

  },
  image: {
    resizeMode: 'contain',
    height: windowHeight * 0.5,
    width: windowWidth
  }
})