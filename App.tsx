import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import { Todo } from "./entites";
import { Provider } from "react-redux";
import store from "./store/AppStore";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: undefined;
    Details: {
        todo: Todo;
    };
};

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <View style={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <NavigationContainer>
                            <Stack.Navigator initialRouteName={"Home"}>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Details" component={DetailsScreen} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </SafeAreaView>
                </View>
            </ThemeProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaebff",
        display: "flex",
    },
});
