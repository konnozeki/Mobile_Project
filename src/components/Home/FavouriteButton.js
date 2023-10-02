import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState} from "react";
import IconTab from "../IconTab";
import { AntDesign } from "@expo/vector-icons";
import { Favourite } from "../../constants/icon";

const FavouriteButton = ({style, active}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  if (count % 2 ===1) {
    active = true
  } else {
    active = false
  }
  return (
    <>
      <TouchableOpacity style={[{ backgroundColor: "white", padding: 4, }, style]} onPress={onPress}>
        {active ? Favourite["filled"] : Favourite["active"]}
      </TouchableOpacity>
    </>
  )
};
export default FavouriteButton;
const styles = StyleSheet.create({

});
