import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FavouriteButton from './FavouriteButton';
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 0.7 * width;
const IMAGE_HEIGHT = 200;
const TopCarousel = ({list}) => {
  return ( 
    <FlatList data={list} horizontal showsHorizontalScrollIndicator={false}
     snapToInterval={IMAGE_WIDTH}
    decelerationRate="fast"
     showsVerticalScrollIndicator={false} keyExtractor={i => i.id} renderItem={({item, index}) => {
        return (
          <View style={{marginLeft: width * 0.08, marginRight: index === list.length - 1 ?  width * 0.08 : 0}}>
            <View style={styles.card}>
              <FavouriteButton style={styles.favourite}/>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image}/>
              </View>
              <View style={[styles.titleBox, styles.shadow]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>     
            </View>
          </View> 
        ) 
    }}>
        
    </FlatList>
  )
}

export default TopCarousel

const styles = StyleSheet.create({
   card: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      marginVertical: 10
   },
   imageBox: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderRadius: '20%',
      overflow: 'hidden',
   },
   image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
    opacity: 0.8

   },
   titleBox: {
     position: 'absolute',
     top: IMAGE_HEIGHT - 55,
     left: 16
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
   },
   author: {
    fontSize: 14,
    color: 'white'
   },
   shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 5,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
   },
   favourite: {
    position: 'absolute',
    top: IMAGE_HEIGHT - 55,
    right: 10,
    zIndex: 1
   }

})
