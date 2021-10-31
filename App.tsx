import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { primaryTheme } from "./styles/theme";
import TabNavigator from "./navigation/TabNavigator";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  if (fontsLoaded) {
    return (
      <ThemeProvider theme={primaryTheme}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <TabNavigator />
          </QueryClientProvider>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
