import { StyleSheet, Text, View , SafeAreaView, ScrollView, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import NavigationHeader from '../../navigation/Shared/NavigationHeader'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import UserInfoImage from '../../components/Image Detail/UserInfoImage'
import ImageViewer from 'react-native-image-zoom-viewer'
const height = Dimensions.get('screen').height
const width = Dimensions.get('window')
state = {modalVisible:false}


const UserDetail = ({navigation, route}) => {
    const {user, author} = route.params
    const [visible, setVisible] = useState(false)
    const [username, setUsername] = useState('')
    
    const [photograph, setPhotograph] = useState([])


    fetch(`http://192.168.0.105:8000/api/user/${author}`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setUsername(data.username)
    })

  


  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
    <View style={{backgroundColor: 'white', marginBottom: '8%'}}>
        <NavigationHeader navigation={navigation} follow = {true}></NavigationHeader>
        <ScrollView>
            <View id = 'Header' style = {{height: height * 0.4}}>
                <View id='Header Image' style={{height: height * 0.335}}>
                    <Image style={{maxHeight: height* 0.25, resizeMode: 'cover', width: '100%', position: 'absolute'}} source={require('../../../assets/images/welcome.jpg')}></Image>
                    <TouchableOpacity onPress={() => {setVisible(true)}}>
                        <Image style={{ alignSelf: 'center', borderRadius: height* 0.15 ,height: height* 0.15, width: height* 0.15, resizeMode: 'cover', position: 'absolute', marginTop: height * 0.17}} source={require('../../../assets/images/welcome.jpg')}></Image>
                    </TouchableOpacity>
                    <Modal visible = {visible} transparent={true} onRequestClose={() => {this.setVisible(false)}}>
                        <ImageViewer enableSwipeDown={true} onSwipeDown={() => {setVisible(false)}} imageUrls={[{url: '', width: '100%', props : {source: require('../../../assets/images/welcome.jpg')}}]}></ImageViewer>
                    </Modal>       
                </View>
                <View style={{height: height*0.665, alignItems:'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{username}</Text>
                    <Text>1 Follower</Text>
                </View>
                
            </View>
            <View id = "Submitted">
                <View style = {{marginHorizontal: '4%', marginVertical: '4%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Submitted Illust/Photo</Text>
                    <TouchableOpacity><Text style={{fontSize: 20}}>All</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <UserInfoImage author={author} noFavourite={true}></UserInfoImage>
                </View>
            </View>
            
            <View id = "Favourite">
                <View style = {{marginHorizontal: '4%', marginVertical: '4%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Favourite Illust/Photo</Text>
                    <TouchableOpacity><Text style={{fontSize: 20}}>All</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <UserInfoImage author={author} noFavourite={true}></UserInfoImage>
                </View>
            </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default UserDetail

const styles = StyleSheet.create({})