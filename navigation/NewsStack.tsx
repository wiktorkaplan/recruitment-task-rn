import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsList, NewsDetails } from "../pages";
import styles from "../styles/navigator";
import { NewsStackProps } from "../types/navigator";

const Stack = createStackNavigator<NewsStackProps>();

const NewsStack: React.FC = () => {
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
        name="NewsList"
        component={NewsList}
        options={{
          title: "News list",
        }}
      />
      <Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          title: "News details",
          //   headerLeft: () => (
          //     <Button
          //       onPress={() => alert("This is a button!")}
          //       title="Info"
          //       color="#fff"
          //     />
          //   ),
        }}
      />
    </Navigator>
  );
};

export default NewsStack;
