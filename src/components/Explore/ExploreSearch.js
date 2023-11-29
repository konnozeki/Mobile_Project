import { StyleSheet, Text, TextInput, View, SafeAreaView , Image, Dimensions} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const width = Dimensions.get("window").width;
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExploreImageList from "./ExploreImageList"
import Tab from '../Shared/Tab';


const ExploreInput = ({icon = true, content = ""}) => {
    return (
        <View style={{marginHorizontal: '3%', flexDirection: 'row', marginVertical: '3%' }}>
            <View style={{justifyContent: 'center',  backgroundColor: 'white'}}>
            {icon ? <Image source={require('./../../../assets/search.png')} style={{width: 16, height: 16}}></Image> : <View></View>}
            </View>
            <TextInput style={{fontSize: 16, paddingHorizontal: '5%', width: width*0.90, backgroundColor: 'white', }} editable placeholder='Search anything...'>
                <Text>{content}</Text>
            </TextInput>
        </View>   
    )
}

export default ExploreInput

const styles = StyleSheet.create({})