import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import FavouriteButton from './FavouriteButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element'
import { HOST } from '../../constants/api';
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 0.7 * width;
const IMAGE_HEIGHT = width * 0.55;
const TopCarousel = ({user, list, title, type}) => {
  const [toplist, setList] = useState([])
  const fetchList = () => {
    fetch(HOST+`api/post/${type}/ranking/`, {method: 'GET'})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const updatedList = data.map((item) => ({
        ...item,
        image: {
          uri: `https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F${item.contributor}%2Fpost%2F${decodeURIComponent(
            item.picture
          ).split("/").pop()}?alt=media`,
        },
      }));
      setList(updatedList);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error.message);
    });
  }
  useEffect(()=>{
    fetchList()
  }, [])

  useFocusEffect(
    useCallback(()=>{
      fetchList()
    }, [])
  )
  const navigation=useNavigation()
  return ( 
    <>
        <View style={styles.container}>
        <Text style={styles.mainTitle}>{title}</Text>

    </View>

    <FlatList data={toplist} horizontal showsHorizontalScrollIndicator={false}
     snapToInterval={IMAGE_WIDTH + width * 0.085}
    decelerationRate="fast"
     showsVerticalScrollIndicator={false} keyExtractor={i => i.id} renderItem={({item, index}) => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate('ImageDetails', {imageDetail: item, type: type})}}>

          <View style={{marginLeft: width * 0.08, marginRight: index === toplist.length - 1 ?  width * 0.08 : 0}}>
            <View style={styles.card}>
            
              
              <SharedElement id={`ImageDetails.${item.id}.image`}>
              
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image}/>


                
              </View>
              
              </SharedElement>
              <View style={[styles.titleBox]}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>

              </View>  
              
            </View>
            
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
      borderRadius: 8,
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
