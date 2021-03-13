import React from "react";
import {View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ButtonWrp from "../shared/ButtonWrp";

export function HomeScreen(props: any) {
    return (
        <SafeAreaProvider>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ButtonWrp
                    title={"Home Screen"}
                />
            </View>

        </SafeAreaProvider>
    )
}
