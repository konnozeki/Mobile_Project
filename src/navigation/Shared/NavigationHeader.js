import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import BackButton from "../../navigation/Shared/BackButton";

const NavigationHeader = ({navigation, title, author, follow}) => {
  return (
      <View style={{justifyContent: 'space-between' ,flexDirection: "row", marginHorizontal: "5%", marginVertical: "2%",}}>
        <View style={{flexDirection: 'row'}}>
          <BackButton navigation = {navigation}></BackButton>
          <View style={{ marginHorizontal: "3%" }}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          {follow ? <TouchableOpacity><Text style={{fontSize: 20, color: 'blue'}}>Follow</Text></TouchableOpacity> : <View/>}
        </View>
      </View>
  )
}

export default NavigationHeader

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
      },
})