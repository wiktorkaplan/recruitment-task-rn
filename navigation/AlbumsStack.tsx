import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Albums } from "../pages";
import styles from "../styles/navigator";
import { AlbumsStackProps } from "../types/navigator";

const Stack = createStackNavigator<AlbumsStackProps>();

const AlbumsStack: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: styles.backgroundColor,
          height: styles.height,
        },
        headerTintColor: styles.headerTintColor,
        headerTitleStyle: {
          fontFamily: styles.fontFamily,
        },
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="Albums"
        component={Albums}
        options={{
          title: "Albums",
        }}
      />
    </Navigator>
  );
};

export default AlbumsStack;
