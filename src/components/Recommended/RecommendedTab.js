import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopCarousel from '../Shared/TopCarousel';
import SectionHeader from './SectionHeader';
import { FAVOURITE_LIST} from '../../constants/List';
import ImageList from '../Shared/ImageList';



const RecommendedTab = ({route, item}) => {
    const [index, setIndex] = useState(0);
  return (
    <View style={{marginBottom:'23.6%'}}>
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
                <TopCarousel title={item[index].title} list={FAVOURITE_LIST}></TopCarousel>
                <SectionHeader title={"Recommended"}></SectionHeader>
                <ImageList route={route}></ImageList>
            </ScrollView>
    </View>
    

  )
}

export default RecommendedTab 

const styles = StyleSheet.create({})