import React from "react";
import {ITodo} from "../../../utils/entities";
import {FlatList, StyleSheet} from "react-native";
import {Avatar, ListItem} from "react-native-elements";
import {checkImage, unCheckImage} from "../../../styles/Variables";

interface ITodoListProps {
    data: ITodo[],
    onChange: (data: ITodo) => void
}

export default function TodoList(props: ITodoListProps) {
    const keyExtractor = (item: ITodo, index: number) => index.toString();
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={props.data}
            renderItem={(item: any) => {
                return <TodoItem item={item.item} onChange={props.onChange}/>
            }}
        />
    )
}

interface ITotoItemProps {
    item: ITodo,
    onChange: (data: ITodo) => void,
}

function TodoItem(props: ITotoItemProps) {
    const {item, onChange} = props;
    return (
        <ListItem bottomDivider>
            <Avatar source={item.isCompleted ? checkImage : unCheckImage} onPress={() => onChange(item)}/>
            <ListItem.Content>
                <ListItem.Title style={item.isCompleted ? styles.checkedList : {}}>
                    {item.title}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    checkedList: {
        textDecorationLine: "line-through",
        textDecorationStyle: 'solid',
    }
});