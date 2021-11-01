import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsList, NewsDetails } from "../pages";
import styles from "../styles/navigator";
import { NewsStackProps, newsListProps } from "../types/navigator";
import { BackButton } from "./NewsStack.styles";
import { ArrowLeft } from "../assets/vectors";

const Stack = createStackNavigator<NewsStackProps>();

const NewsStack: React.FC<newsListProps> = ({ navigation }) => {
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
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </BackButton>
          ),
        }}
      />
    </Navigator>
  );
};

export default NewsStack;
