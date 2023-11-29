import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AndroidSafeArea from '../../Android/AndroidSafeArea';

let loginSuccess = false;

export const getRegisterSuccess = () => {
  console.log(loginSuccess)
  return loginSuccess
}



const RegisterScreen = ({navigation}) => {
  console.log(getRegisterSuccess())
  const handleRegister = () => {
    fetch('http://192.168.0.105:8000/api/register/', {
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
          navigation.navigate('LoginScreen')
          // Successful login, handle the response here
          return response.json();
        } else {
          // Failed login, handle errors here
          throw new Error('Register failed');
        }
      })
      .then((data) => {
        // Handle the token received in the response
        console.log('Token:', data.token);
  
        // You can store the token in AsyncStorage or your state management solution
      })
      .catch((error) => {
        // Handle login errors, e.g., show an error message to the user
        console.error('Register error:', error);
      });
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style = {[AndroidSafeArea.AndroidSafeArea, {backgroundColor: 'white'}]}>

    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logo}>
        <Image source={require('./../../../assets/icon.png')} style={{maxHeight: 150, maxWidth: 150, resizeMode:'cover'}}></Image>
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
      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
        <Text style={styles.forgot_button}>Already have an Account?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

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


 