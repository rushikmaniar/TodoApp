import React, {useEffect, useState} from "react";
import FAB from "react-native-fab";
import {appColors} from "../../../styles/Variables";
import TodoList from "./TodoList";
import {ITodo} from "../../../utils/entities";
import {SafeAreaProvider} from "react-native-safe-area-context";

export function HomeScreen(props: any) {
    const [data, setData] = useState<ITodo[]>([]);

    useEffect(() => {
        const data1 = [...Array(10).keys()].map((item: any, index: number) => (
            {
                id: index.toString(),
                title: "Todo-" + index,
                isCompleted: false
            }
        ));
        setData(data1);

    }, []);

    const onChange = (row: ITodo) => {
        setData(data.map((item: ITodo) => {
            if (item.id == row.id) {
                item.isCompleted = !row.isCompleted
            }
            return item
        }));
    };

    return (
        <SafeAreaProvider>

            <TodoList data={data} onChange={onChange}/>

            <FAB
                buttonColor={appColors.primary}
                iconTextColor={appColors.white}
                onClickAction={() => {
                    console.log("FAB pressed")
                }}
                visible={true}
            />
        </SafeAreaProvider>
    )
}