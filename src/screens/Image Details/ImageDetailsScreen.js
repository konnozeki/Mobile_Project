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
  Button
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("screen").height;

import { useSafeAreaInsets } from "react-native-safe-area-context";
import FavouriteButton from "../../components/Shared/FavouriteButton";
import ShareButton from "../../components/Shared/ShareButton";
import BackButton from "../../navigation/Shared/BackButton";
import NavigationHeader from "../../navigation/Shared/NavigationHeader";
import AndroidSafeArea from "../../Android/AndroidSafeArea";
import UserInfoImage from "./UserInfoImage";

const ImageDetailsScreen = ({ navigation, route, active }) => {
  const insets = useSafeAreaInsets();
  const { imageDetail } = route.params;
  
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
    <View style={{backgroundColor: 'white'}}>
      <NavigationHeader navigation = {navigation} title={imageDetail.title} author={imageDetail.author}></NavigationHeader>
      <View style={styles.line} />
      <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <View style={styles.imageContent}>
              <Image source={imageDetail.image} style={[styles.image]} />
            </View>
            <View style={{ flexDirection: "row", marginLeft: "8%" }}>
              <FavouriteButton active={active}></FavouriteButton>
              <ShareButton></ShareButton>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View
          style={{
            flex: 1,
            marginHorizontal: "8%",
            marginTop: "10%",
            marginBottom: '4%'
          }}
        >
          <Text style={styles.author}>{imageDetail.author}</Text>
          <Text>This is the detail of the image</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-between',
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
            <Text>hashtag</Text>
          </View>
		
        </View>
        <View style={styles.line} />
        <View id="User Info" style = {styles.info}>
          <View id = "User" style= {{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '8%', marginVertical: '4%'}}>
            <Text style = {{fontWeight: 'bold'}}>{imageDetail.author}</Text>
            <TouchableOpacity><Text style = {{color: 'blue'}}>Follow</Text></TouchableOpacity>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <UserInfoImage></UserInfoImage>
          </View>
        </View>
        <View style={[styles.line, {marginVertical: '4%'}]} />
		<View id="Comment Section" style={styles.commentSection}>
			<View id="Comment Input" style={styles.commentInput}>
				<TextInput style={{fontSize: 16, paddingHorizontal: '5%', height: 40, backgroundColor: 'white', }} editable placeholder='Leave a Comment...'/>
			</View>
			<View id="Comments">
				<View id='Comment 1' style = {styles.comment}>
					<Text>This is comment 1</Text>
					<View id="ReplyButton" style={styles.replyButton}>
						<Button title="Reply"></Button>
					</View>
					
				</View>
				<View id="Comment 2" style = {styles.comment}>
					<Text>This is comment 2</Text>
					<View id="ReplyButton" style={styles.replyButton}>
						<Button title="Reply"></Button>
					</View>
				</View>
			</View>
			<View id="Next Recommended">
				<Text>This is the recommended section.</Text>
			</View>
		</View>

      </ScrollView>
      </View>
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
    resizeMode: "contain",
    maxHeight: windowHeight * 0.5,
    maxWidth: windowWidth,
    backgroundColor: "#ffffff",
    alignSelf: "center",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 2,
  },
  imageContent: {
    width: windowWidth,
    height: windowHeight * 0.5,
  },
  commentSection: {
	marginHorizontal: '8%',
  },
  commentInput: {
	marginVertical: '2%',
  borderColor: 'gray',
  borderWidth: 1,
  },
  comment: {
	marginVertical: '2%',
	height: 80,
  },
  replyButton: {
	alignSelf:'flex-start'
  },
  info: {
    justifyContent: 'center',
  }
});
