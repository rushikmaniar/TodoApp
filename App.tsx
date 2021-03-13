import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeScreen} from "./components/screens/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {ThemeProvider} from "react-native-elements";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}