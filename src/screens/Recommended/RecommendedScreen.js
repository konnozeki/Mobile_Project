import { StyleSheet, SafeAreaView, View} from 'react-native'
import React from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea';
import { Camera, Illust } from '../../constants/icon';
import RecommendedTab from '../../components/Recommended/RecommendedTab';
const RecommendedScreen = () => {
  return (
    <SafeAreaView style={[{backgroundColor: '#242526'}, AndroidSafeArea.AndroidSafeArea]}>
      <View style={{backgroundColor: 'white'}}>
        <RecommendedTab item={tabs}></RecommendedTab>
      </View>
    </SafeAreaView>
    
  )
}

export default RecommendedScreen

const styles = StyleSheet.create({})

const tabs = [
  {
    icon: Illust,
  },
  {
    icon: Camera,
  }
]
