import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopCarousel from './TopCarousel';
import SectionHeader from './SectionHeader';
import ImageList from './ImageList';
import { FAVOURITE_LIST, IMAGE_LIST } from '../../constants/List';



const RecommendedTab = ({item}) => {
    const insets = useSafeAreaInsets();

    const [index, setIndex] = useState(0);
  return (
    <View>
            <View style={{flexDirection: 'row',paddingHorizontal: '20%', justifyContent: 'space-between', backgroundColor: '#242526'}}>
                {item.map((id, i) => {
                    const active = index === i
                    return (
                            <TouchableOpacity style={{paddingHorizontal: '10%', paddingVertical: '5%'}} key={i} onPress={() => setIndex(i)}>
                              {active ? item[i].icon.active : item[i].icon.inactive}
                            </TouchableOpacity>                 
                    )
                })}
                
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopCarousel list={FAVOURITE_LIST}></TopCarousel>
                <SectionHeader title={"Recommended"}></SectionHeader>
                <ImageList list={IMAGE_LIST}/>
            </ScrollView>
    </View>
    

  )
}

export default RecommendedTab 

const styles = StyleSheet.create({})