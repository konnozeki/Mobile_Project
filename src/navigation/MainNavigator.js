import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator';

const Stack = createStackNavigator();







const MainNavigator = () => {
    return (
    <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={LoginNavigator} name='Login' options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen component={TabNavigator} name='TabNavigator' options={{headerShown: false}}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    </SafeAreaProvider>
    )
}

export default MainNavigator;