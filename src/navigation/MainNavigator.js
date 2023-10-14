import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';







const MainNavigator = () => {
    return (
    <SafeAreaProvider>
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    </SafeAreaProvider>
    )
}

export default MainNavigator;