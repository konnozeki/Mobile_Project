import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.3;
const SearchImage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={[styles.headerImage]} source={IMAGE_LIST[0].image}>
          <View style={styles.layer}>
            <Text style={styles.headerText}>{IMAGE_LIST[0].hashtag}</Text>
          </View>
        </ImageBackground>
      </View>

      {IMAGE_LIST.map((item, index) => {
        return (
          <View style={[styles.cardContainer]} key={item.id}>
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("ExploreDetail", {
                  hashtag: item.hashtag,
                });
              }}
            >
              <View>
                <View style={styles.imageBox}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View style={[styles.imageLayer]}>
                    <Text style={styles.imageHashtag}>{IMAGE_LIST[0].hashtag}</Text>
                    </View>


                  </ImageBackground>
                  
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default SearchImage;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 35,
    lineHeight: 84,
    textAlign: "center",
  },
  layer: {
    backgroundColor: "#00000066",
    height: IMAGE_HEIGHT,
    justifyContent: "flex-end",
  },
  imageLayer: {
    backgroundColor: "#00000066",
    height: width * 0.98 / 3,
    justifyContent: "flex-end",
  },
  imageHashtag: {
    color: "white",
    fontSize: 20,
    lineHeight: 48,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: '31.3%'
  },
  header: {
    alignItems: "center",
    marginVertical: "0.5%",
    marginHorizontal: "0.5%",
  },
  headerImage: {
    width: width * 0.99,
    height: IMAGE_HEIGHT,
    resizeMode: "cover",
  },
  cardContainer: {
    marginLeft: "0.5%",
    marginBottom: "0.5%",
  },
  imageBox: {
    width: (width * 0.98) / 3,
    height: (width * 0.98) / 3,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: (width * 0.98) / 3,
    height: (width * 0.98) / 3,
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
});


const IMAGE_LIST = [
  {
    id: 1,
    title: 'Sleeping Day Neeeeee',
    image: require('./../../../assets/images/welcome1.jpg'),
    author: 'Yuuki',
    hashtag: '#Illustration'
},
{
    id: 2,
    title: 'Mlem desu',
    image: require('./../../../assets/images/welcome2.jpg'),
    author: 'Aiko',
    hashtag: '#Illustration2'
},
{
    id: 3,
    title: 'Mlem desu ne',
    image: require('./../../../assets/images/welcome3.jpg'),
    author: 'Aiko-chi',
    hashtag: '#Illustration2'
},
{
    id: 4,
    title: 'Mlem desu neee',
    image: require('./../../../assets/images/welcome4.jpg'),
    author: 'Aiko chan',
    hashtag: '#Illustration3'
},
{
  id: 5,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Illustration4'
},
{
  id: 6,
  title: 'Mlem desu neee',
  image: require('./../../../assets/images/welcome4.jpg'),
  author: 'Aiko chan',
  hashtag: '#Illustration5'
},
{
  id: 7,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Illustration6'
},
{
  id: 8,
  title: 'Mlem desu neee',
  image: require('./../../../assets/images/welcome4.jpg'),
  author: 'Aiko chan',
  hashtag: '#Illustration7'
},
{
  id: 9,
  title: 'Mlem desu ne',
  image: require('./../../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi',
  hashtag: '#Illustration8'
},
]