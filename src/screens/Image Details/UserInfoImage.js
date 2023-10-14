import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';
import FavouriteButton from './../../components/Shared/FavouriteButton'
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 0.7 * width;
const IMAGE_HEIGHT = width * 0.55;
const UserInfoImage = () => {
    const navigation=useNavigation()
    return <View style = {{flexDirection: 'row', position: 'relative'}}>


    {List.map((item, index) => {
        return (
            <TouchableOpacity onPress={() => {navigation.push('ImageDetails', {imageDetail: item})}}>
                <View>
                    <SharedElement id={`ImageDetails.${item.id}.image`}>
                    <View style={styles.imageBox}>
                    <Image style={styles.image} source={item.image}/>
                    <View style={{position: 'absolute', bottom: 0, alignSelf: 'flex-end'}}>
                            <FavouriteButton/>
                    </View>
              </View>

                    </SharedElement>
                </View>
            </TouchableOpacity>
        )
    })
    
}
</View>
}
            

export default UserInfoImage

const styles = StyleSheet.create({
    imageBox: {
        height: width * 0.32,
        width: width * 0.32,
        marginHorizontal: width * 0.04/6
    },
    image: {
        height: width * 0.32,
        width: width * 0.32
    }
})

const List = [
    {
        id: 1,
        title: 'Sleeping Day Neeeeee',
        image: require('./../../../assets/images/welcome1.jpg'),
        author: 'Yuuki'
    },
    {
        id: 2,
        title: 'Mlem desu',
        image: require('./../../../assets/images/welcome2.jpg'),
        author: 'Aiko'
    },
    {
        id: 3,
        title: 'Mlem desu ne',
        image: require('./../../../assets/images/welcome3.jpg'),
        author: 'Aiko-chi'
    },
]