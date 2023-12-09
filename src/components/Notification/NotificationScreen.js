import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState} from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import { useNavigation } from '@react-navigation/native'
const NotificationScreen = ({route}) => {
    const navigation = useNavigation()
    const {user} = route.params
    const [author, setAuthor] = useState([]);
const [userList, setUserList] = useState([]);
const [postList, setPostList] = useState([]);
useEffect(() => {
  fetch(`http://192.168.0.105:8000/api/favourite/contributor/${user.id}`, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setAuthor(data);

      // Create an array of promises for fetching user data for each author
      const promises = data.map((author) =>
        fetch(`http://192.168.0.105:8000/api/user/${author.user}`, { method: 'GET' })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
      );

      // Use Promise.all to wait for all fetch requests to complete
      Promise.all(promises)
        .then((userData) => {
          setUserList(userData);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });

         const promisesPost = data.map((author) =>
        fetch(`http://192.168.0.105:8000/api/post/${author.post}`, { method: 'GET' })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
      );

      // Use Promise.all to wait for all fetch requests to complete
// Use Promise.all to wait for all fetch requests to complete
Promise.all(promisesPost)
  .then((postData) => {
    const flattenedData = postData.flatMap((item) => item);

    const mapPostData = flattenedData.map((item) => ({
      ...item,
      image: {
        uri: `https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F${item.contributor}%2Fpost%2F${decodeURIComponent(
          item.picture
        ).split("/").pop()}?alt=media`,
      },
    }));
    setPostList(mapPostData);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });

        
    })
    .catch((error) => {
      console.error('Error fetching author data:', error);
    });
}, []);


if(author.length!==0&&postList.length!==0)
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
        <View style={{backgroundColor: '#242526', paddingVertical: '4%', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Notifications</Text>
        </View>
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{ borderBottomColor: "gray", borderTopWidth: StyleSheet.hairlineWidth, flex: 2, justifyContent:'center'}}>
                    {author.map((item, index) => (
                        <>
                        {console.log(index)}
                        <View key={index+999} style={{marginHorizontal: '8%', paddingVertical: '7%'}}>
                        <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('ImageDetails', {imageDetail: postList[index] ,user: user, type: postList[index].type === undefined || postList[index].type ==='Illust' ? 'illust' : 'photo'})}>
                          <View style={{flexDirection: 'row'}}>


                            <View style={{width: '70%', justifyContent: 'center'}}>
                              
                                  <Text numberOfLines={1} style={{fontSize: 18}}><Text style={{fontWeight: 'bold'}}>{userList.length === 0 ? 'unknown': userList[index].username}</Text> liked <Text style={{fontWeight: 'bold'}}>{postList.length === 0 ? 'unknown': postList[index].title}</Text>.</Text>

                            </View>
                            <View style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                              <Image source={postList[index].image} alt='Image' style={{width: 50, height: 50}}></Image>
                            </View>
                            
                        </View>
                        </TouchableOpacity> 
                        </View>
                        <View style={styles.line}></View>
                        </>
                    ))}
            </View>

            
        </ScrollView>
    </SafeAreaView>
  )
else {
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
        <View style={{backgroundColor: '#242526', paddingVertical: '4%', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Notifications</Text>
        </View>
        <View style={{backgroundColor: 'white', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{position: 'absolute', marginBottom: '15%', fontSize: 20}}>There is nothing in here...</Text>
        </View>
    </SafeAreaView>
  )
}
}

export default NotificationScreen

const styles = StyleSheet.create({
    line: {
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 2,
    },
})