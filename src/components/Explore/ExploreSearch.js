import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import BackButton from '../../navigation/Shared/BackButton';
import { useNavigation } from '@react-navigation/native';
import { HOST } from '../../constants/api';

const ExploreSearch = ({user, type, icon = true, hashtag=''}) => {
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = useState(hashtag);
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(HOST+`api/hashtags/${type}/`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const handleSearch = (text) => {
      const filteredResults = Object.keys(data).filter((key) =>
        key.toLowerCase().includes(text.toLowerCase())
      );
      setSearchQuery(text);
      setSearchResults(filteredResults);
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setSearchResults(Object.keys(data));
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setSearchResults([]);
    };
  
    const handleResultPress = (item) => {
      setSearchQuery(item); // Update searchQuery with the selected item
      handleBlur(); // Close the search results
      Keyboard.dismiss(); // Hide the keyboard
      navigation.push('ExploreDetail', {user: user, type: type, hashtag: item})
    };
  
    const handleCancelPress = () => {
      Keyboard.dismiss();
      setSearchQuery('');
      handleBlur();
    };
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', marginHorizontal: '3%' }}>
            {icon ? <Image source={require('./../../../assets/search.png')} style={{marginLeft: '3%', width: 16, height: 16 }}></Image>:<BackButton small={true} navigation={navigation}></BackButton>}
            <TextInput
              value={searchQuery}
              onChangeText={handleSearch}
              style={{ flex: 1, fontSize: 16, paddingHorizontal: '5%', backgroundColor: 'white' }}
              editable
              placeholder='Search anything...'
              onFocus={handleFocus}
              keyboardType='web-search'
              onSubmitEditing={()=>navigation.push('ExploreDetail', {user: user, type: type, hashtag: searchQuery})}
            >
            </TextInput>
            <TouchableOpacity
              style={{ marginRight: '5%', paddingHorizontal: '3%', paddingVertical: '1%' }}
              onPress={handleCancelPress}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
  
          {searchResults.length > 0 && (
            <View style={{ flexDirection: 'row', marginTop: 5, height: '100%' }}>
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleResultPress(item)}>
                    <View style={{marginHorizontal: '5%', marginVertical: '3%'}}>
                      <Text style={{ fontSize: 16 }}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator = {false}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  
  export default ExploreSearch;
  
  const styles = StyleSheet.create({});
  