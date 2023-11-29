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
import { IMAGE_LIST } from "../../constants/List";

const { width } = Dimensions.get("window");
const BOX_HEIGHT = width * 0.8;
const IMAGE_WIDTH = width * 0.99 ;
const IMAGE_HEIGHT = width * 0.60;

const NewsImageList = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {IMAGE_LIST.map((item, index) => {
        return (
          <View style={[styles.cardContainer]} key={item.id}>
          <TouchableOpacity style={styles.container} key={item.id} onPress={() => {
              navigation.navigate("ArticleDetails", {
              });
          }}>
            <View>

                <View style={[styles.card, styles.shadowLight]}>
                <SharedElement id={`ArticleDetail.${item.id}.image`}>
                  <View style={styles.imageBox}>
                    <Image style={styles.image} source={item.image} />
                    <View style={{justifyContent: 'flex-end', position: 'absolute', alignSelf:'flex-end', marginBottom: '100%'}}>
                    </View>
                  </View>
                </SharedElement>
                      <View style = {{marginHorizontal: '8%'}}>
                        <Text numberOfLines={1} style={[styles.title, {flexWrap:'nowrap'}]}>{item.title}</Text>
                        <Text numberOfLines={1} style={styles.author}>{item.author}</Text> 

                      </View>
                     
                    
                </View>
              </View>

          </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default NewsImageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: width * 0.0025,
    marginBottom: '11%'
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
