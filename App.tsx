import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemeProvider } from "react-native-elements";

interface Todo {
    id: string;
    text: string;
    isDone: boolean;
}

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [userInput, setUserInput] = useState<string>("");

    useEffect(() => {
        const data = Array.from(new Array(3).keys()).map((value, index) => {
            return {
                id: index.toString(),
                text: `Todo-${value.toString()}`,
                isDone: false,
            };
        });

        setTodos(data);
    }, []);

    const toggleIsDone = (todo: Todo) => {
        setTodos(
            todos.map((item) => {
                return {
                    ...item,
                    ...(item.id === todo.id && { isDone: !todo.isDone }),
                };
            })
        );
    };

    const renderItem = (itemInfo: ListRenderItemInfo<Todo>) => {
        const { item } = itemInfo;
        return (
            <Pressable onPress={() => toggleIsDone(item)}>
                <View style={styles.rowView}>
                    <Text style={styles.rowViewText}>{item.text}</Text>
                    {item.isDone && <AntDesign name="check" size={24} color="black" />}
                </View>
            </Pressable>
        );
    };

    const onAdd = () => {
        if (!userInput) {
            return;
        }
        setTodos([
            ...todos,
            {
                id: new Date().getTime().toString(),
                text: userInput,
                isDone: false,
            },
        ]);
        setUserInput("");
    };

    return (
        <ThemeProvider>
            <View style={styles.container}>
                <SafeAreaView style={{ marginTop: 30, flex: 1 }}>
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
                </SafeAreaView>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaebff",
        display: "flex",
    },
    listView: {
        flex: 1,
    },
    rowView: {
        flexDirection: "row",
        justifyContent: "space-between",
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
