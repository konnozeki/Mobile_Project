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
  import FavouriteButton from "../Shared/FavouriteButton";
  import { useNavigation } from "@react-navigation/native";
  import {SharedElement} from "react-navigation-shared-element"


  const { width } = Dimensions.get("window");
  const IMAGE_WIDTH = width * 0.985 / 2;
  const IMAGE_HEIGHT = width * 0.985 / 2;
  
  const ImageList = ({ list }) => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        {list.map((item, index) => {
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
                        <FavouriteButton active={true}/>
                      </View>
                    </View>

                  </SharedElement>
                    
                      
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
      height: IMAGE_HEIGHT,
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
  