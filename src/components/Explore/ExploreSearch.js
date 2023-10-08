import { StyleSheet, Text, TextInput, View, SafeAreaView , Image, Dimensions} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const width = Dimensions.get("window").width;
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExploreImageList from "./ExploreImageList"
import Tab from '../Shared/Tab';


const ExploreInput = () => {
    return (

        <SafeAreaView>
        <View style={{marginHorizontal: '3%', flexDirection: 'row',}}>
            <View style={{justifyContent: 'center',  backgroundColor: 'white'}}>
            <Image source={require('./../../../assets/search.png')} style={{width: 16, height: 16}}></Image>
            </View>
            <TextInput style={{fontSize: 16, paddingHorizontal: '5%', width: width*0.90, height: 40, backgroundColor: 'white', }} editable placeholder='Search anything...'/>
        </View>
        </SafeAreaView>     
    )
}

export default ExploreInput

const styles = StyleSheet.create({})