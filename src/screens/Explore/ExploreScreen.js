import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ExploreSearch from '../../components/Explore/ExploreSearch';
import ExploreContent from '../../components/Explore/ExploreContent';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AndroidSafeArea from '../../Android/AndroidSafeArea';

const ExploreScreen = () => {

  return (

    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      <View style={{backgroundColor: 'white'}}>
        <ExploreSearch/> 
        <ExploreContent></ExploreContent>
      </View>
    </SafeAreaView>
    
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})
