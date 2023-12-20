import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import { SharedElement } from 'react-navigation-shared-element';
import FavouriteButton from './../../components/Shared/FavouriteButton'
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 0.7 * width;
const IMAGE_HEIGHT = width * 0.55;
const UserInfoImage = ({noFavourite, user, author}) => {
    const navigation=useNavigation()
    const [illust, setIllust] = useState([])
  useEffect(()=> {
    fetch(`http://192.168.0.105:8000/api/post/user/${author}`, { method: "GET" })
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const illustList = data.map((item) => ({
          ...item,
          image: {
            uri: `https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F${author}%2Fpost%2F${decodeURIComponent(item.picture).split("/").pop()}?alt=media`,
          },
        }));
        setIllust(illustList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [])
    return <View style = {{flexDirection: 'row', position: 'relative', flexWrap: 'wrap', marginBottom: '3%'}}>
    

    {illust.map((item, index) => {
        {if (index <= 9) return (
            <View key={item.id}>
            <TouchableOpacity onPress={() => {navigation.push('ImageDetails', {imageDetail: item, type: (item.type === 'Illust' ? 'illust': 'photo')})}}>
                <View>
                    <SharedElement id={`ImageDetails.${item.id}.image`}>
                    <View style={styles.imageBox}>
                    <Image style={styles.image} source={item.image}/>
              </View>

                    </SharedElement>
                </View>
            </TouchableOpacity>

            </View>
        )
        else {return;}
        }
    })
    
}
</View>
}
            

export default UserInfoImage

const styles = StyleSheet.create({
    imageBox: {
        height: width * 0.33,
        width: width * 0.33,
        marginHorizontal: width * 0.01/6
    },
    image: {
        height: width * 0.33,
        width: width * 0.33
    }
})
