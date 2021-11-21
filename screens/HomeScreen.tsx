import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../App";
import { Todo } from "../entites";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/AppStore";
import { HomeAction } from "../store/HomeState";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen(props: Props) {
    const { todos } = useSelector((rootState: IRootState) => rootState.home);
    const [userInput, setUserInput] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        const data = Array.from(new Array(30).keys()).map((value, index) => {
            return {
                id: index.toString(),
                text: `Todo-${value.toString()}`,
                isDone: false,
            };
        });
        dispatch(HomeAction.setTodos(data));
    }, []);

    const toggleIsDone = (todo: Todo) => {
        updateTodo({
            ...todo,
            isDone: !todo.isDone,
        });
    };

    const updateTodo = (todo: Todo) => {
        dispatch(
            HomeAction.setTodos(
                todos.map((item) => {
                    return item.id === todo.id ? todo : item;
                })
            )
        );
    };

    const renderItem = (itemInfo: ListRenderItemInfo<Todo>) => {
        const { item } = itemInfo;
        const onDetails = () => {
            props.navigation.navigate("Details", {
                todo: item,
            });
        };
        return (
            <Pressable onPress={() => toggleIsDone(item)}>
                <View style={styles.rowView}>
                    {!item.isDone && <Feather name="square" size={24} color="black" />}
                    {item.isDone && <Feather name="check-square" size={24} color="black" />}
                    <Text
                        style={{
                            paddingLeft: 10,
                            flex: 1,
                            ...(item.isDone && { textDecorationLine: "line-through" }),
                        }}
                    >
                        {item.text}
                    </Text>
                    <Pressable onPress={onDetails}>
                        <Text style={{ color: "#5b96ff" }}>Details</Text>
                    </Pressable>
                </View>
            </Pressable>
        );
    };

    const onAdd = () => {
        if (!userInput) {
            return;
        }
        dispatch(
            HomeAction.setTodos([
                ...todos,
                {
                    id: new Date().getTime().toString(),
                    text: userInput,
                    isDone: false,
                },
            ])
        );
        setUserInput("");
    };
    return (
        <>
            <View style={{ flex: 1 }}>
                <FlatList data={todos} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
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
                <AntDesign name="pluscircle" size={40} color="white" style={{ padding: 10 }} onPress={onAdd} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    rowView: {
        flexDirection: "row",
        margin: 8,
        height: 50,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    rowViewText: {
        paddingLeft: 10,
    },
    userTextViewContainer: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#5b96ff",
    },
    userTextView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 1,
    },
});
