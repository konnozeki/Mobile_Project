import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FavouriteButton from './FavouriteButton';
import { useNavigation } from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element'
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 0.7 * width;
const IMAGE_HEIGHT = 200;
const TopCarousel = ({list}) => {
  const navigation=useNavigation()
  return ( 
    <>
        <View style={styles.container}>
        <Text style={styles.mainTitle}>Illust Ranking</Text>

    </View>

    <FlatList data={list} horizontal showsHorizontalScrollIndicator={false}
     snapToInterval={IMAGE_WIDTH}
    decelerationRate="fast"
     showsVerticalScrollIndicator={false} keyExtractor={i => i.id} renderItem={({item, index}) => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate('ImageDetails', {imageDetail: item})}}>

          <View style={{marginLeft: width * 0.08, marginRight: index === list.length - 1 ?  width * 0.08 : 0}}>
            <View style={styles.card}>
            
              
              <SharedElement id={`ImageDetails.${item.id}.image`}>
              
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image}/>
              </View>
              
              </SharedElement>
              <View style={[styles.titleBox, styles.shadow]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>  
              
            </View>
            <View style={{justifyContent: 'flex-end', position: 'absolute', alignSelf:'flex-end', marginTop: IMAGE_HEIGHT-32}}><FavouriteButton/></View>
          </View> 

          </TouchableOpacity>
          
        ) 
    }}>
        
    </FlatList>
    </>
  )
}

export default TopCarousel

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '8%',
    marginVertical: '2%'
},
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    
},
   card: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,

   },
   imageBox: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderRadius: '5%',
      overflow: 'hidden',
   },
   image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
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
   favourite: {
    position: 'absolute',
    top: IMAGE_HEIGHT - 55,
    right: 10,
    zIndex: 1

  }
   
})
