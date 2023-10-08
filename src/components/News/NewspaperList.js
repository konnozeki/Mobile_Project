import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Touchable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {SharedElement} from "react-navigation-shared-element"


const { width } = Dimensions.get("window");
const BOX_HEIGHT = width * 0.99;
const IMAGE_WIDTH = width * 0.99 ;
const IMAGE_HEIGHT = width * 0.60;

const ImageList = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {IMAGE_LIST.map((item, index) => {
        return (
          <View style={[styles.cardContainer]} key={item.id}>
          <TouchableOpacity style={styles.container} key={item.id} onPress={() => {
              navigation.navigate("ImageDetails", {
                imageDetail: item,
              });
          }}>
            <View>

                <View style={[styles.card, styles.shadowLight]}>
                <SharedElement id={`ImageDetails.${item.id}.image`}>
                  <View style={styles.imageBox}>
                    <Image style={styles.image} source={item.image} />
                    <View style={{justifyContent: 'flex-end', position: 'absolute', alignSelf:'flex-end', marginBottom: '100%'}}>
                    </View>
                  </View>
                </SharedElement>
                  
                      
                     <Text numberOfLines={1} style={[styles.title, {flexWrap:'nowrap'}]}>{item.title}</Text>
                     <Text numberOfLines={1} style={styles.author}>{item.author}</Text> 
                    
                </View>
              </View>

          </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    marginLeft: width * 0.005,
    marginBottom: width * 0.005,
  },
  card: {
    width: IMAGE_WIDTH,
    height: BOX_HEIGHT,
    backgroundColor: "white",

  },
  imageBox: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    overflow: "hidden",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: "cover",
  },

  titleBox: {
    flex: 1,

  },
  title: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  author: {
    fontSize: 16,
    color: "gray",
  },
  shadowLight: {
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

const IMAGE_LIST = [
  {
    id: 1,
    title: 'Sleeping Day Neeeeee',
    image: require('./../../../assets/images/welcome1.jpg'),
    author: 'Yuuki',
    hashtag: '#Yuuki'
},
{
    id: 2,
    title: 'Mlem desu',
    image: require('./../../../assets/images/welcome2.jpg'),
    author: 'Aiko',
    hashtag: '#Yuuki'
},
{
    id: 3,
    title: 'Mlem desu ne',
    image: require('./../../../assets/images/welcome3.jpg'),
    author: 'Aiko-chi',
    hashtag: '#Yuuki'
},
{
    id: 4,
    title: 'Mlem desu neee',
    image: require('./../../../assets/images/welcome4.jpg'),
    author: 'Aiko chan',
    hashtag: '#Yuuki'
},
{
  id: 5,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Yuuki'
},
{
  id: 6,
  title: 'Mlem desu neee',
  image: require('./../../../assets/images/welcome4.jpg'),
  author: 'Aiko chan',
  hashtag: '#Yuuki'
},
{
  id: 7,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Yuuki'
},
{
  id: 8,
  title: 'Mlem desu neee',
  image: require('./../../../assets/images/welcome4.jpg'),
  author: 'Aiko chan',
  hashtag: '#Yuuki'
},
{
  id: 9,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Yuuki'
},
]