import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import FavouriteButton from "../Shared/FavouriteButton";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = (width * 0.985) / 2;
const IMAGE_HEIGHT = (width * 0.985) / 2;

const SubmittedImageList = ({ route, type }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.105:8000/api/post/${type}/user/${user.id}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const typelist = []

        const updatedList = data.map((item) => ({
          ...item,
          image: {
            uri: `https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F${user.id}%2Fpost%2F${decodeURIComponent(item.picture).split("/").pop()}?alt=media`,
          },
        }));
        setList(updatedList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [user.id]);

  return (
    <View style={styles.container}>
      {list.map((item, index) => (
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
                    <Image
                      style={styles.image}
                      source={item.image}
                    />
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
};

export default SubmittedImageList;

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
