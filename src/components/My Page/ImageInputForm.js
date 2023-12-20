import React, { useState} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, ScrollView,
  FlatList, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AndroidSafeArea from '../../Android/AndroidSafeArea';
import { Dropdown } from 'react-native-element-dropdown';
import NavigationHeader from '../../navigation/Shared/NavigationHeader';
import { useNavigation } from '@react-navigation/native';



const height = Dimensions.get('screen').height
const TYPE = [
  {
    label: 'Illustration', 
    value: 'Illust'
  },
  {
    label: 'Photograph', 
    value: 'Photo'
  },
]

const AGE_RESTRICTION = [
  {
    label: 'All Age',
    value: 'All'
  },
  {
    label: '18+',
    value: '18+'
  }
]



function getFileExtensionFromUri(uri) {
  const lastDotIndex = uri.lastIndexOf('.');
  if (lastDotIndex === -1) {
      return null;
  }
  return uri.slice(lastDotIndex + 1).toLowerCase();
}


export default function ImageInputForm({route}) {
  const [image, setImage] = useState(null);
  const {user} = route.params 

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  


  const handleSubmit = (navigation) => {
    const postData = new FormData();
    if(type !== 'Photo' && type != 'Illust') Alert.alert('Validation Error', 'Please choose your post type.')
    else if(title.trim()==='') Alert.alert('Validation Error', 'Please input your title.')
    else if(hashtags.length===0) Alert.alert('Validation Error', 'Please input your hashtag at least 1.')
    else if(age !== 'All' && age != '18+') Alert.alert('Validation Error', 'Please choose the age restriction of your post.')
  else 
    {
    postData.append('release_date', getCurrentDate());
    postData.append('content', content);
    postData.append('type', type);
    postData.append('contributor', user.id); 
    postData.append('number_of_likes', '0');
    postData.append('title', title);
    postData.append('age_restriction', age);

    setHashtags([...hashtags, type==='Illustration'?'#Illustration':'#Photograph']);
    console.log(hashtags)
    const hashtagsJSON = JSON.stringify(hashtags);
    postData.append('hashtags', hashtagsJSON);

    // Append the image file to the FormData object
    // 'picture' should match the name expected by your Django backend
    postData.append('picture', {
      uri: image,
      type: 'image/*',  // Adjust the type according to your image
      name: title + `.${getFileExtensionFromUri(image)}`,
    });

    // Making a POST request using Fetch
    fetch('http://192.168.0.105:8000/api/post/', {
      method: 'POST',
      body: postData,
      
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', JSON.stringify(data));
        // Handle success response here
        Alert.alert('Post Successful', 'Press Return to go back', [{
          text: 'Return',
          onPress: () => navigation.goBack(),
          style: 'cancel',
      }])
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error here
      });}
      
  }




  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const [hashtags, setHashtags] = useState([]);
  const [currentHashtag, setCurrentHashtag] = useState('');
  const handleAddHashtag = () => {
    if (currentHashtag) {
      setHashtags([...hashtags, "#" + currentHashtag]);
      setCurrentHashtag('');
    }
  };
  const handleHashtagChanging = (hashtag) => {
    const newHashtag = hashtag.replace(/\s/g, '')
    setCurrentHashtag(newHashtag)
  }
  const handleRemoveHashtag = (index) => {
    // Create a copy of the current hashtags array
    const updatedHashtags = [...hashtags];
    // Remove the hashtag at the specified index
    updatedHashtags.splice(index, 1);
    // Update the state with the new array
    setHashtags(updatedHashtags);
  };
  const navigation = useNavigation()
  const [title, setTitle] = useState(null)
  const [age, setAge] = useState(null)
  const [content, setContent] = useState(null)
  const [type, setType] = useState(null);
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      <View style={{backgroundColor:"white"}}>
        <NavigationHeader navigation={navigation}></NavigationHeader>
      </View>
      <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
        
        <View style={styles.line}></View>
        <View style={{backgroundColor:'black'}}>
          {image && <Image source={{ uri: image }} style={{ width: 350, height: 350, alignSelf: 'center'}} />}
        </View>

        <View style = {{alignSelf: 'center', justifyContent: 'center', height: height * 0.1}}>
          <TouchableOpacity style={{backgroundColor: '#dddddd', paddingVertical: '4%', paddingHorizontal: '25%', borderRadius: '15%'}} onPress={pickImage}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Choose Image</Text>
          </TouchableOpacity>
        </View>

        

        <View style={{marginHorizontal: '8%', borderWidth: 1, padding: 5}}>
      <Dropdown
        data={TYPE}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Image Type"
        value={type}
        onChange={item => {
          setType(item.value);
        }}
       
      />
    </View>
          <View style={{marginVertical: '4%'}}>
            <View style={styles.line}></View>
            <View>
              <View style={{backgroundColor:"#f5f5f5", paddingVertical: '2%'}}>
                <Text style={{marginHorizontal: '8%', fontSize: 18}}>Title</Text>
              </View>
              <View style={styles.line}></View>
              <View style={{marginHorizontal: '8%', marginVertical: '4%'}}>
                <TextInput onChangeText={(title) => setTitle(title)} value={title} editable style={{justifyContent:'center'}} placeholder='Write the title here...'></TextInput>
              </View>
            </View>
            <View style={styles.line}></View>


      <View>
        <View style={{ backgroundColor: "#f5f5f5", paddingVertical: '2%' }}>
          <Text style={{ marginHorizontal: '8%', fontSize: 18 }}>Hashtags</Text>
        </View>
        <View style={styles.line}></View>
        <FlatList
        style={{marginHorizontal: '8%', marginVertical: '2%'}}
          data={hashtags}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=>handleRemoveHashtag(index)}>
            <View style={{backgroundColor: '#242526', borderRadius: 5, height: 25, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 18}}>{" " + item}<Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}> {" " + String.fromCharCode(215)}  </Text></Text>
            </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '8%', marginVertical: '4%' }}>
          <TextInput
            onChangeText={handleHashtagChanging}
            value={currentHashtag}
            style={{ flex: 1, justifyContent: 'center' }}
            placeholder='Type hashtags'
            onSubmitEditing={handleAddHashtag}
            keyboardType='default'
          />
           <TouchableOpacity onPress={handleAddHashtag}>
            <Text style={{ fontSize: 20, color: 'blue' }}>+</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.line}></View>



            <View>
              <View style={{backgroundColor:"#f5f5f5", paddingVertical: '2%'}}>
                <Text style={{marginHorizontal: '8%', fontSize: 18}}>Description</Text>
              </View>
              <View style={styles.line}></View>
              <View style={{marginHorizontal: '8%', marginVertical: '4%', height:100}}>
                <TextInput onChangeText={(content) => setContent(content)} value={content} editable style={{justifyContent:'center'}} placeholder='Write the description here...'></TextInput>
              </View>
            </View>
            <View style={styles.line}></View>

          </View>
          <View style={{marginHorizontal: '8%', borderWidth: 1, padding: 5}}>
          <Dropdown
        data={AGE_RESTRICTION}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Restriction Age"
        value={age}
        onChange={item => {
          setAge(item.value);
        }}
       
      />
      </View>
          <View style = {{alignSelf: 'center', justifyContent: 'center', height: height * 0.1}}>
            <TouchableOpacity style={{backgroundColor: '#dddddd', paddingVertical: '4%', paddingHorizontal: '25%', borderRadius: '15%'}} onPress={()=>handleSubmit(navigation)}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Post</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    </SafeAreaView>
    
  );

  
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

