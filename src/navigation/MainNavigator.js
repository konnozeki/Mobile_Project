import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import ImageDetailsScreen from '../screens/ImageDetailsScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='root' component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name='ImageDetails' component={ImageDetailsScreen} options={{
                headerShown: false,

                }}/>
       
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;