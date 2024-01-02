import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea';
import { HOST } from '../../constants/api';



const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    fetch(HOST + 'api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          
          // Successful login, handle the response here
          return response.json();
        } else {
          // Failed login, handle errors here
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        // Handle the token received in the response
        console.log('User:', data.user.id);
        navigation.navigate('TabNavigator', {user: data.user})
  
        // You can store the token in AsyncStorage or your state management solution
      })
      .catch((error) => {
        // Handle login errors, e.g., show an error message to the user
        console.error('Login error:', error);
      });
  };

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  return (
    <SafeAreaView style = {[AndroidSafeArea.AndroidSafeArea, {backgroundColor: 'white'}]}>

    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logo}>
        <Image source={require('./../../../assets/favicon.png')} style={{height: 150, width: 150, resizeMode:'cover'}}></Image>
      </View>
       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          autoCapitalize='none'
          editable
          value={username}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          editable
          value={password}
        /> 
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('RegisterScreen')}>
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginText: {
      color: 'white'
    },
    logo: {
      alignItems: 'center',
      width: 200,
      height: 200,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
     },
     image :{
      marginBottom: 40
    },
    inputView: {
      backgroundColor: "#e0e0e0",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,

    },
    TextInput: {
      height: 50,
      flex: 1,
      marginHorizontal: '5%',
      paddingVertical: '5%'
    },
    forgot_button: {
      height: 30,
    },
    loginBtn:
    {
      width:"40%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      backgroundColor:"#242526",
    }
  });


 