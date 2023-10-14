import {StyleSheet, Dimensions} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavouriteScreen from "../screens/Favourite/FavouriteScreen";
import NewsScreen from "../screens/News/NewsScreen";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {Home, Search, Favourite , News, Article, User} from "./../constants/icon"
import RecommendedStack from "./Recommended/RecommendedStack";
import ExploreStack from "./Explore/ExploreStack";
import MyPageScreen from "../screens/My Page/MyPageScreen";
const windowHeight = Dimensions.get("screen").height;

const Tab = createBottomTabNavigator();

const tabs = [
  {
    screen: RecommendedStack,
    name: "Home",
    icon : Home
  },
  {
    screen: ExploreStack,
    name: "Explore",
    icon: Search
  },
  {
    screen: NewsScreen,
    name: "News",
    icon: News
  },


  {
    screen: FavouriteScreen,
    name: "Favourite",
    icon: Favourite
  },
  {
    screen: MyPageScreen,
    name: "My Page",
    icon: User
  },
  
];
const Stack = createSharedElementStackNavigator();
const TabNavigator = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: '#242526'}}}
    >
      {tabs.map(({screen, name, icon }) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? icon['active'] : icon['inactive']
              },
            }}
          />
        );
      })}
           
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create();
