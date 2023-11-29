import { StyleSheet, Text, View, SafeAreaView , Dimensions, TouchableOpacity, Image,} from 'react-native'
import React from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import { useNavigation } from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const MyPageDetail = ({route}) => {
  const {user} = route.params
  const navigation = useNavigation()
  return (
      <View style={{backgroundColor: 'white'}}>
        <View id='Header' style={{height: height * 0.3, backgroundColor:"#eeeeee"}}>
          <View style={{position: 'absolute', height: height * 0.3, backgroundColor: 'black'}}>
            <Image style={[{height: height * 0.3, width: width, resizeMode: 'cover', opacity: 0.5}]} source={require('./../../../assets/images/welcome.jpg')}></Image>
          </View>

          <View style = {{position: 'absolute', bottom: 0, flexDirection: 'row' , marginHorizontal: '4%', marginVertical: '2%'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("UserDetails", {user: user})}} style={{flexDirection: 'row'}}>
              <View style={{width: height * 0.1, height: height * 0.1}}>
                <Image style={{width: height * 0.1, height: height * 0.1, borderRadius: height * 0.05}} source={require('./../../../assets/images/welcome.jpg')}/>
              </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', marginHorizontal: '6%'}}>
              <Text style={{color:"white", fontWeight: 'bold', fontSize: 22}}>{user.username}</Text>
              <Text style={{color:"white", fontWeight: 'bold'}}>View My Profile</Text>
            </View>
            </TouchableOpacity>
          </View>

        </View>
        <View id='Main'>
          <View id='Submit' style = {{alignSelf: 'center', justifyContent: 'center', height: height * 0.1}}>
            <TouchableOpacity style={{backgroundColor: '#dddddd', paddingVertical: '4%', paddingHorizontal: '25%', borderRadius: '15%'}} onPress={() => navigation.navigate('ImageInputForm', {user: user})}>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Submit Anything</Text>
            </TouchableOpacity>
          </View>


          <View id='Second' style = {{justifyContent: 'flex-start'}}>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, borderTopWidth: StyleSheet.hairlineWidth}}>
              <View style = {{marginVertical: '3%', marginHorizontal: '8%', }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SubmittedScreen', {navigation: navigation})}}><Text style = {{fontSize: 18}}>Submitted Posts</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
              <View style = {{marginVertical: '3%', marginHorizontal: '8%', }}>
                <TouchableOpacity><Text style = {{fontSize: 18}}>Notifications</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
              <View style = {{marginVertical: '3%', marginHorizontal: '8%', }}>
                <TouchableOpacity><Text style = {{fontSize: 18}}>Privacy</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
              <View style = {{marginVertical: '3%', marginHorizontal: '8%', }}>
                <TouchableOpacity><Text style = {{fontSize: 18}}>Settings</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
              <View style = {{marginVertical: '3%', marginHorizontal: '8%', }}>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}><Text style={{color:'red', fontSize:18}}>Log out</Text></TouchableOpacity>
              </View>
            </View>

          </View>
          
        </View>
      </View>
  )
}

export default MyPageDetail

const styles = StyleSheet.create({})