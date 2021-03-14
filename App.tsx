import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeScreen} from "./components/screens/home/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Header, ThemeProvider} from "react-native-elements";
import {headerStyles} from "./styles/HeaderStyles";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerTitle: "Tasks",
                            headerStyle: headerStyles.header,
                            headerTitleStyle: headerStyles.header,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}