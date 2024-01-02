import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HOST } from "../../constants/api";

const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.3;

const ExploreImageList = ({ type }) => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch(HOST+`api/hashtags/${type}/limited/`);
      const jsonData = await response.json();
      setData(jsonData);
      setSearchResults(Object.keys(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [type])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("ExploreDetail", {
            hashtag: type==='illust' ? '#Illustration' : '#Photograph',
            type: type,
          });
        }}>
          <ImageBackground style={[styles.headerImage]} source={IMAGE_LIST[0].image}>
            <View style={styles.layer}>
              <Text style={styles.headerText}>{type==='illust' ? '#Illustration' : '#Photograph'}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {searchResults.map((item, index) => {
        return (
          <View style={[styles.cardContainer]} key={index}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ExploreDetail", {
                  hashtag: item,
                  type: type,
                });
              }}
            >
              {console.log(item)}
              <View>
                <View style={styles.imageBox}>
                  <ImageBackground style={styles.image} source={IMAGE_LIST[0].image}>
                    <View style={[styles.imageLayer]}>
                      <Text style={styles.imageHashtag}>{item}</Text>
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


export default ExploreImageList;

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
    hashtag: '#Illustration'
},
]