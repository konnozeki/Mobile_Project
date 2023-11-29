import { StyleSheet, Text, View , SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea'
import NavigationHeader from '../../navigation/Shared/NavigationHeader'
import { line } from '../../constants/theme'
import { IMAGE_LIST } from '../../constants/List'
import { IdcardFilled } from '@ant-design/icons'

const height = Dimensions.get('screen').height;

const ArticleDetail = ({title, navigation, route}) => {
  return (
    <SafeAreaView style = {AndroidSafeArea.AndroidSafeArea}>
        <View style = {{backgroundColor: 'white', marginBottom: '5%'}}>
            <NavigationHeader navigation={navigation} title={"Title"} author={"Author"}></NavigationHeader>
            <View style={line}/>
            <ScrollView>
                <View style = {{justifyContent: 'space-between', marginHorizontal: '8%'}}>
                    <View id = 'Header' style={{justifyContent: 'space-between', flexDirection: 'row', marginVertical: '4%'}}>
                      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Tab 1</Text>
                      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Tab 2</Text>
                      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Tab 3</Text>
                    </View>
                </View>
                <View id = 'Image Header' style={{height: height * 0.25}}>
                    <Image source={require('./../../../assets/images/welcome.jpg')} style = {{width: '100%', maxHeight: height * 0.25}}></Image>
                </View>
                <View id = 'Body' style = {{marginHorizontal: '6%', marginVertical: '4%'}}>
                  <View id='Title' style = {{marginVertical: '4%'}}>
                    <Text style = {{fontSize: 24, fontWeight: 'bold'}}>This is the title of the Article</Text>
                  </View>             
                  <View id = 'Content'>
                    <Text style = {{fontSize: 18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem et metus volutpat, in interdum sapien cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nec sagittis eros, eu fringilla purus.</Text>
                  </View>
                  {IMAGE_LIST.map((item, index) => {
                    return (
                      <View key={item.id} id='Image' style = {{marginVertical: '4%'}}>
                      <View style={{height: height * 0.08, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                          <TouchableOpacity style= {{marginVertical: '1%'}}>
                            <Text style = {{fontSize: 20, fontWeight : 'bold'}}>{item.author}</Text>
                          </TouchableOpacity>

                        </View>
                        <Text>{item.title}</Text>
                      </View>

                      <TouchableOpacity style = {{height: height * 0.32}} onPress={() => navigation.navigate("ImageDetails", {imageDetail : item})}>

                        <Image source={item.image} style = {{width: '100%', maxHeight: height * 0.32}}></Image>

                      </TouchableOpacity>
                      </View>
                    )
                  })}
                  
                </View>
                
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ArticleDetail

const styles = StyleSheet.create({})