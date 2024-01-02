import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Favourite } from "../../constants/icon";
import { useFocusEffect } from "@react-navigation/native";
import { HOST } from "../../constants/api";

const FavouriteButton = ({ style, user, post }) => {
  const [isActive, setIsActive] = useState(false);

  const fetchData = async () => {
    try {
      if (user !== undefined && post !== undefined) {
        const response = await fetch(
          HOST+`api/favourite/${user}/${post}`,
          { method: "GET" }
        );
  
        if (!response.ok) {
          if (response.status === 404) {
            console.log("Resource not found");
            setIsActive(false);
          } else {
            console.log(`HTTP error! Status: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } else {
          setIsActive(true);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle other fetch errors as needed
    }
  };

  const handlePress = async () => {
    try {
      if (isActive) {
        const response = await fetch(
          HOST+ `api/favourite/${user}/${post}`,
          { method: "DELETE" }
        );

        if (response.status === 404) {
          console.log("Resource not found");
          setIsActive(false);
        } else if (!response.ok) {
          console.log(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsActive(false);
        }
      } else {
        const response = await fetch(HOST+`api/favourite/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: user,
            post: post,
          }),
        });

        if (response.status === 404) {
          console.log("Resource not found");
          setIsActive(false);
        } else if (!response.ok) {
          console.log(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsActive(true);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle other fetch errors as needed
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [user, post])
  );

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "white",
          padding: 4,
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={handlePress}
    >
      {isActive ? Favourite["filled"] : Favourite["notFilled"]}
    </TouchableOpacity>
  );
};

export default FavouriteButton;
