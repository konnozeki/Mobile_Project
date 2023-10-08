import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreScreen from "../screens/Explore/ExploreScreen";
import FavouriteScreen from "../screens/Favourite/FavouriteScreen";
import NewsScreen from "../screens/News/NewsScreen";
import HomeNavigator from "./Home/HomeNavigator";
import ArticleScreen from "../screens/Article/ArticleScreen";

import {Home, Search, Favourite , News, Article} from "./../constants/icon"


const Tab = createBottomTabNavigator();

const tabs = [
  {
    screen: HomeNavigator,
    name: "Home",
    icon : Home
  },
  {
    screen: ExploreScreen,
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
    screen: ArticleScreen,
    name: "Article",
    icon: Article
  },
  
  
];

const TabNavigator = () => {
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
