import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState} from "react";
import { Share } from "../../constants/icon";

const ShareButton = ({style}) => {
  return (
    <>
      <TouchableOpacity style={[{backgroundColor: "white", padding: 4, width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center'  }, style]}>
         {Share.inactive}
      </TouchableOpacity>
    </>
  )
};
export default ShareButton;
const styles = StyleSheet.create({

});
