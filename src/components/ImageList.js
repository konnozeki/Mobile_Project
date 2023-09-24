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
  import FavouriteButton from "./FavouriteButton";
  import { useNavigation } from "@react-navigation/native";
  import {SharedElement} from "react-navigation-shared-element"


  const { width } = Dimensions.get("window");
  const IMAGE_WIDTH = width * 0.38;
  const IMAGE_HEIGHT = 200;
  
  const ImageList = ({ list }) => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        {list.map((item, index) => {
          return (
            <View style={[styles.cardContainer]}>
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
                    </View>

                  </SharedElement>
                    
                    <View style={styles.footer}>
                      <View style={styles.titleBox}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.author}>{item.author}</Text>
                      </View>
                      <FavouriteButton />
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
  
  export default ImageList;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    cardContainer: {
      marginLeft: width * 0.08,
      marginBottom: width * 0.08,
      borderRadius: "20%",
    },
    card: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      backgroundColor: "white",
      borderRadius: "20%",
    },
    imageBox: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT - 60,
      borderTopLeftRadius: "20%",
      borderTopRightRadius: "20%",
      overflow: "hidden",
    },
    image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT - 60,
      resizeMode: "cover",
    },
    footer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 6,
      marginLeft: 16,
      marginRight: 10,
      marginBottom: 6,
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
  