import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import TopCarousel from '../Shared/TopCarousel';
import SectionHeader from './SectionHeader';
import { FAVOURITE_LIST } from '../../constants/List';
import ImageList from '../Shared/ImageList';

const RecommendedTab = ({ user, item }) => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // Add a state variable

  const handleTabPress = (tabIndex) => {
    setIndex(tabIndex);
    setKey((prevKey) => prevKey + 1); // Update the key to trigger a re-render
  };

  return (
    <View style={{ marginBottom: '23.6%' }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: '20%', justifyContent: 'space-between', backgroundColor: '#242526' }}>
        {item.map((id, i) => (
          <TouchableOpacity style={{ paddingHorizontal: '10%', paddingVertical: '5%' }} key={i} onPress={() => handleTabPress(i)}>
            {index === i ? item[i].icon.active : item[i].icon.inactive}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopCarousel user={user} key={index+90} type={item[index].type} title={item[index].title} list={FAVOURITE_LIST}></TopCarousel>
        <SectionHeader title={"Recommended"}></SectionHeader>
        {/* Pass a unique key to force re-render when the key changes */}
        <ImageList key={index} type={item[index].type} user={user}></ImageList>
      </ScrollView>
    </View>
  );
};

export default RecommendedTab;

const styles = StyleSheet.create({});
