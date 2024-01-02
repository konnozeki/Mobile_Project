import React, { useEffect, useState, useCallback } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import FavouriteButton from "../Shared/FavouriteButton";
import { HOST } from "../../constants/api";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = (width * 0.985) / 2;
const IMAGE_HEIGHT = (width * 0.985) / 2;

const FavouriteImageList = ({ user, type }) => {
  const [list, setList] = useState([]);
  const navigation = useNavigation();
  const [postData, setPostData] = useState([]);
  
    const fetchImageData = useCallback(() => {
      fetch(HOST+`api/favourite/user/${user.id}`, { method: 'GET' })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setList(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
        });
    }, [user.id]);
  
    const fetchPostData = useCallback(async () => {
      const postDataArray = [];
    
      for (let i = 0; i < list.length; i++) {
        try {
          console.log(list[i].post)
          const response = await fetch( HOST+`api/post/${list[i].post}`, { method: 'GET' });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          let data = await response.json();
          // Add the image field to the data object
          data[0].image = {
            uri: `https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F${data[0].contributor}%2Fpost%2F${decodeURIComponent(
              data[0].picture
            ).split("/").pop()}?alt=media`,
          };
          console.log(data[0])
          postDataArray.push(data[0]);
        } catch (error) {
          console.error('Error fetching post data:', error.message);
        }
      }
    
      setPostData(postDataArray);
    }, [list]);
    

  
    useEffect(() => {
      fetchImageData();
    }, [fetchImageData]);
    useEffect(() => {
      if (list.length > 0) {
        fetchPostData();
      }
    }, [fetchPostData, list]);
  console.log(postData)
  if(postData.length!==0) return (
    <View style={styles.container}>
      {postData.map((item, index) => (
        <View style={[styles.cardContainer]} key={item.id}>
          <TouchableOpacity
            style={styles.container}
            key={item.id}
            onPress={() => {
              navigation.push("ImageDetails", {
                imageDetail: item,
                user: user,
                type: type
              });
            }}
          >
            <View>
              <View style={[styles.card, styles.shadowLight]}>
                <SharedElement id={`ImageDetails.${item.id}.image`}>
                  <View style={styles.imageBox}>
                    <Image style={styles.image} source={item.image} blurRadius={item.age_restriction === 'All' ? 0 : 50} />
                    <View
                      style={{
                        justifyContent: "flex-end",
                        position: "absolute",
                        alignSelf: "flex-end",
                        marginBottom: "100%",
                      }}
                    >

                    </View>
                  </View>
                </SharedElement>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
  else {
    return (
      <View>
        <Text style={{fontSize: 20}}>There is nothing in there...</Text>
      </View>
    )
  }
};


export default FavouriteImageList;

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
