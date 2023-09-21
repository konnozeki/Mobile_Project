import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='root' component={TabNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;