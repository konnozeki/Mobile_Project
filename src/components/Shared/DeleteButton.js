import { StyleSheet, Text, TouchableOpacity, View , Alert} from 'react-native'
import React from 'react'
import { Trash } from '../../constants/icon'

const DeleteButton = ({post, navigation}) => {
    const createTwoButtonAlert = () =>
    Alert.alert('Delete', `Are you sure to delete your post ${post.title}?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
       onPress: () => {
        fetch(`http://192.168.0.105:8000/api/post/${post.id}`, {method: 'DELETE'})
        .then((response)=>{
            if(!response.ok) {
                console.log("Error when Deleting the Post.")
            }
        })
        Alert.alert('Delete Successful', 'Press Return to go back', [{
            text: 'Return',
            onPress: () => navigation.goBack(),
            style: 'cancel',
        }])
    },
       style: 'destructive'
      },
    ]);
  return (

    <TouchableOpacity  onPress={createTwoButtonAlert}>
      {Trash}
    </TouchableOpacity>
  )
}

export default DeleteButton
