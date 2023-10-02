import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Tab = ({item}) => {
    const [index, setIndex] = useState(0);
  return (
    <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '3%'}}>
                {item.map((tab, i) => {
                    const active = index === i
                    return (
                        <TouchableOpacity style={{padding: '5%'}} key={i} onPress={() => setIndex(i)}>
                            <Text style={[{fontSize: 20}, active ? {color: 'black'} : {color: 'gray'}]}>{tab.title}</Text>          
                        </TouchableOpacity>
                    )
                })}
                
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text>{item[index].content}</Text>
            </ScrollView>
    </View>
    

  )
}

export default Tab

const styles = StyleSheet.create({})