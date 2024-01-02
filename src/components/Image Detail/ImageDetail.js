import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import ImageViewer from "react-native-image-zoom-viewer";

import NavigationHeader from "../../navigation/Shared/NavigationHeader";
import AndroidSafeArea from "../../Android/AndroidSafeArea";
import UserInfoImage from "./UserInfoImage";
import ImageList from "../Shared/ImageList";
import FavouriteButton from "../Shared/FavouriteButton";
import DeleteButton from "../Shared/DeleteButton";
import { HOST } from "../../constants/api";
const { width } = Dimensions.get("window");



const ImageDetail = ({ navigation, route}) => {
  const {imageDetail, user, type} = route.params
  const [visible, setVisible] = useState(false);
  const [author, setAuthor] = useState('')
  const [likes, setLikes] = useState(0)
  useEffect(()=>{
    fetch(HOST+`api/favourite/post/${imageDetail.id}`, {method: 'GET'})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setLikes(data.length)
    })
    .catch((error) => {
      console.error("Error fetching user data:", error.message);
    });
  })
  useEffect(() => {
    if (imageDetail && imageDetail.contributor) {
      fetch(HOST+`api/user/${imageDetail.contributor}`, { method: "GET" })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setAuthor(data.username);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error.message);
        });
    }
  }, [imageDetail]);

  
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", marginBottom: "12%" }}>
        <NavigationHeader
          navigation={navigation}
          title={imageDetail.title}
          author={author}
        ></NavigationHeader>
        <View style={styles.line} />
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: '#e7e7e7' }}>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
              }}
            >
              <Image
                style={{ width: width, height: width * 1.5, resizeMode: 'contain' }}
                source={imageDetail.image}
              />
              <Modal
                visible={visible}
                transparent={true}
                onRequestClose={() => {
                  this.setVisible(false);
                }}
              >
                <ImageViewer
                  enableSwipeDown={true}
                  onSwipeDown={() => {
                    setVisible(false);
                  }}
                  imageUrls={[{ url: imageDetail.image.uri }]}
                ></ImageViewer>
              </Modal>
            </TouchableOpacity>
          </View>

          <View style={[styles.line]} />
          <View style={{ marginHorizontal: "8%", flexDirection: 'row', alignItems: 'center' }}>
          <Text>{imageDetail.release_date+"    "}</Text>
                <Text>{likes + imageDetail.number_of_likes}</Text>
                <FavouriteButton
      user={user.id}
      post={imageDetail.id}
    />
    {user.id == imageDetail.contributor ? <DeleteButton navigation={navigation} post={imageDetail}/>: <></>}

          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: "8%",
              marginBottom: "4%",
            }}
          >
          
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {imageDetail.content == "null"
                ? "No description"
                : imageDetail.content}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              
            </View>
            <View style={{flexDirection: 'row'}}>
            {imageDetail.hashtags.length === 0 ? <View></View> : imageDetail.hashtags.map((item, index) => {
                return (
                  <View key={index}>
                  <TouchableOpacity onPress={()=>navigation.push("ExploreDetail", {hashtag: item, type: type})}>
                    <Text style={{fontSize: 16}}>{item + " "}</Text>
                  </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.line} />
          <View id="User Info" style={styles.info}>
            <View
              id="User"
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: "8%",
                marginVertical: "4%",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.push("UserDetails", { author: imageDetail.contributor })
                }
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {author}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <UserInfoImage user = {user.id} author={imageDetail.contributor} noFavourite={false}></UserInfoImage>
            </View>
          </View>
          <View style={[styles.line, { marginVertical: "4%" }]} />
          
          <View id="Next Recommended">
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginHorizontal: "8%",
                marginBottom: "4%",
              }}
            >
              Related Works
            </Text>
            <ImageList type={type} user={user}></ImageList>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ImageDetail;
const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 2,
  },
  imageContent: {
    justifyContent: "center",
    width: "100%",
  },
  commentSection: {
    marginHorizontal: "8%",
  },
  commentInput: {
    marginVertical: "2%",
    borderColor: "gray",
    borderWidth: 1,
  },
  comment: {
    marginVertical: "2%",
    height: 80,
  },
  replyButton: {
    alignSelf: "flex-start",
  },
  info: {
    justifyContent: "center",
  },
});
