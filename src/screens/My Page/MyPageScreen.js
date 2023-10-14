import { StyleSheet, Text, View, SafeAreaView , Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
const height = Dimensions.get('screen').height
const MyPageScreen = () => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
      <View style={{backgroundColor: 'white'}}>
        <View id='Header' style={{height: height * 0.2, backgroundColor:"#eeeeee"}}>
          <View style = {{position: 'absolute', bottom: 0}}>
            <Text>This is the First Part 1</Text>
            <Text>This is the First Part 2</Text>
          </View>
        </View>
        <View id='Main'>
          <View id='Submit' style = {{alignSelf: 'center', justifyContent: 'center', height: height * 0.1}}>
            <TouchableOpacity style={{backgroundColor: '#dddddd', paddingVertical: '4%', paddingHorizontal: '25%', borderRadius: '15%'}}>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Submit Anything</Text>
            </TouchableOpacity>
          </View>
          <View id='Submit' style = {{justifyContent: 'flex-start'}}>
            <Text>This is the Second Part 2 - My Works</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyPageScreen

const styles = StyleSheet.create({})