import {StyleSheet, Dimensions} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouriteScreen from "../screens/Favourite/FavouriteScreen";
import {Home, Search, Favourite , News, Article, User, Notification} from "./../constants/icon"
import RecommendedStack from "./Recommended/RecommendedStack";
import ExploreStack from "./Explore/ExploreStack";
import MyPageStack from "./My Page/MyPageStack"
import NotificationStack from "./Notification/NotificationStack";

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
    screen: NotificationStack,
    name: "Notification",
    icon: Notification
  },
  {
    screen: MyPageStack,
    name: "My Page",
    icon: User
  },
  
];

const TabNavigator = ({route}) => {
  const {user} = route.params
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: '#242526', paddingBottom: '8%'}}}
    >
      {tabs.map(({screen, name, icon }) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            initialParams={{user: user}}
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
