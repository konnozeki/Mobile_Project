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
import ImageDetail from "../../components/Image Detail/ImageDetail";

const ImageDetailScreen = ({ navigation, route, active }) => {
  return (
    <ImageDetail route={route} navigation={navigation} active={active}></ImageDetail>
  );
};

export default ImageDetailScreen;