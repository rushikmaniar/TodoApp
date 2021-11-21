import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../App";
import { Button } from "react-native-elements";
import { Todo } from "../entites";
import { useDispatch, useSelector } from "react-redux";
import { HomeAction } from "../store/HomeState";
import { IRootState } from "../store/AppStore";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen(props: Props) {
    const { todo } = props.route.params;
    const [userInput, setUserInput] = useState<string>(todo.text);
    const { todos } = useSelector((rootState: IRootState) => rootState.home);
    const dispatch = useDispatch();

    const onSavePress = () => {
        if (!userInput) {
            return;
        }
        dispatch(
            HomeAction.setTodos(
                todos.map((item) => {
                    return item.id === todo.id ? { ...item, text: userInput } : item;
                })
            )
        );
        setUserInput("");
        props.navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.userTextViewContainer}>
                <View style={styles.userTextView}>
                    <TextInput
                        placeholder={"Todo..."}
                        style={{
                            fontSize: 25,
                            paddingLeft: 10,
                        }}
                        value={userInput}
                        onChangeText={setUserInput}
                    />
                </View>
                <Button containerStyle={{ marginTop: 20 }} onPress={onSavePress} title={"Save"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaebff",
        display: "flex",
    },
    userTextViewContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 20,
    },
    userTextView: {
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 1,
    },
});
