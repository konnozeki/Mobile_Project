import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import IconTab from "../components/IconTab";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    type: "home",
    screen: HomeScreen,
    name: "Home",
    icon: {
      true: <IconTab iconName="home" focused={true} />,
      false: <IconTab iconName="home" focused={false} />,
    },
  },
  {
    type: "search1",
    screen: SearchScreen,
    name: "Search",
    icon: {
      true: <IconTab iconName="search1" focused={true} />,
      false: <IconTab iconName="search1" focused={false} />,
    },
  },
  {
    type: "hearto",
    screen: FavouriteScreen,
    name: "Favourite",
    icon: {
      true: <IconTab iconName="hearto" focused={true} />,
      false: <IconTab iconName="hearto" focused={false} />,
    },
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
                return focused ? icon[true] : icon[false];
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
