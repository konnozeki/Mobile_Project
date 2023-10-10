import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import React from "react";
import { LeftArrow } from "../../constants/icon";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("screen").height;

import { useSafeAreaInsets } from "react-native-safe-area-context";
import FavouriteButton from "../../components/Home/FavouriteButton";
import ScreenHeader from "../../components/Home/ScreenHeader";

const ImageDetailsScreen = ({ navigation, route, active}) => {
  const insets = useSafeAreaInsets();
  const { imageDetail } = route.params;
  return (
    <SafeAreaView>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: "5%",
                marginBottom: "2%"
              }}
            >
              <TouchableOpacity onPress={navigation.goBack}>
                {LeftArrow}
              </TouchableOpacity>
              <View style={{marginHorizontal: '3%'}}>
                <Text style={styles.author}>{imageDetail.author}</Text>
                <Text style={styles.title}>{imageDetail.title}</Text>
              </View>
            </View>
            <View style={styles.line} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <View style={styles.imageContent} >
              
              <Image source={imageDetail.image} style={[styles.image]} />
            </View>
            <View style={{flexDirection: 'row', marginLeft: '8%'}}>
              <FavouriteButton active={active}></FavouriteButton>
            </View>     
            </View>
            </View>
            

        <View
          style={{
            flex: 1,
            marginHorizontal: "8%",
            marginTop: "10%",
          }}
        >
          <Text style={styles.author}>{imageDetail.author}</Text>
          <Text>This is the detail of the image</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            <Text>{imageDetail.author}</Text>
            <Text>{imageDetail.author}</Text>
            <Text>{imageDetail.title}</Text>
            <Text>{imageDetail.title}</Text>
            <Text>{imageDetail.title}</Text>
            <Text>{imageDetail.title}</Text>
            <Text>{imageDetail.title}</Text>
            <Text>{imageDetail.title}</Text>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: windowHeight * 0.5,
    width: windowWidth,
  },
  imageBox: {
    borderRadius: 8,
  },
  image: {
    resizeMode: 'contain',
    maxHeight: windowHeight * 0.5,
    maxWidth: windowWidth,
    backgroundColor: "#ffffff",
    alignSelf: "center",
  },
  favourite: {
    position: "absolute",
    flexDirection: "row",
    flex: 2,
    zIndex: 1,
    marginTop: windowHeight * 0.6,
    marginLeft: 30,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 2,
  },
  author: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  imageContent: {
    width: windowWidth,
    height: windowHeight * 0.5
  },
});