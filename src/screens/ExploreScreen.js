import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ExploreSearch from '../components/Explore/ExploreSearch';
import ExploreContent from '../components/Explore/ExploreContent';


const ExploreScreen = () => {
  return (
    <>
    <ExploreSearch/>

    
    <ExploreContent></ExploreContent>
    </>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})
