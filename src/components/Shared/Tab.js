import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

{/* Cái này gồm các tham số của item là icon, content. */}

const Tab = ({ item, icon = true }) => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // Add a state variable
  const handleTabPress = (tabIndex) => {
    setIndex(tabIndex);
    setKey((prevKey) => prevKey + 1); // Update the key to trigger a re-render
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', paddingHorizontal: '20%', justifyContent: 'space-between', backgroundColor: '#242526' }}>
        {item.map((id, i) => {
          const active = index === i;
          return (
            <TouchableOpacity style={{ paddingHorizontal: '10%', paddingVertical: '5%' }} key={i} onPress={() => {
              console.log('Changing tab to index:', i);
              handleTabPress(i);
            }}>
              {icon ? (active ? item[i].icon['active'] : item[i].icon['inactive']) : (active ? item[i].text['active'] : item[i].text['inactive'])}
            </TouchableOpacity>
          );
        })}

      </View>
      <ScrollView style={{ marginBottom: '23.5%', backgroundColor: 'white', height: '100%' }} showsVerticalScrollIndicator={false}>
        {item[index].content}
      </ScrollView>
    </View>
  );
};

export default Tab

const styles = StyleSheet.create({})