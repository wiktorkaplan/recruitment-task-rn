import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsStack from "./NewsStack";
import AlbumsStack from "./AlbumsStack";
import { TabContainerProps } from "../types/navigator";
import {
  Container,
  Label,
  ContainerFocused,
  LabelFocused,
} from "./TabNavigator.styles";

const Stack = createBottomTabNavigator();

const TabContainer: React.FC<TabContainerProps> = ({ label, focused }) => (
  <>
    {focused ? (
      <ContainerFocused>
        <LabelFocused>{label}</LabelFocused>
      </ContainerFocused>
    ) : (
      <Container>
        <Label>{label}</Label>
      </Container>
    )}
  </>
);

const TabNavigator = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName="NewsStack"
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused }: any) => {
          let label;
          switch (route.name) {
            case "NewsStack":
              label = "News";
              break;
            case "AlbumsStack":
              label = "Albums";
              break;
            default:
              return null;
          }
          return <TabContainer label={label} focused={focused} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 56 },
      })}
    >
      <Screen name="NewsStack" component={NewsStack} />
      <Screen name="AlbumsStack" component={AlbumsStack} />
    </Navigator>
  );
};

export default TabNavigator;
