import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import IconTab from "../components/IconTab";
import {Home, Search, Favourite} from "./../constants/icon"

const Tab = createBottomTabNavigator();

const tabs = [
  {
    type: "home",
    screen: HomeScreen,
    name: "Home",
    icon : Home
  },
  {
    type: "search1",
    screen: SearchScreen,
    name: "Search",
    icon: Search
  },
  {
    type: "hearto",
    screen: FavouriteScreen,
    name: "Favourite",
    icon: Favourite
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {tabs.map(({ type, screen, name, icon }) => {
        return (
          <Tab.Screen
            key={type}
            name={name}
            component={screen}
            options={{
              tabBarActiveTintColor: "#000000",
              tabBarInactiveTintColor: "gray",
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
