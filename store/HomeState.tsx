import { Todo } from "../entites";

export interface IHomeState {
    todos: Todo[];
}

const init: IHomeState = {
    todos: [],
};

export enum IHomeStateConstants {
    SET_TODO = "SET_TODO",
}

export function HomeReducer(state: IHomeState = init, action: any) {
    switch (action.type) {
        case IHomeStateConstants.SET_TODO:
            return { ...state, todos: action.value };
        default:
            return state;
    }
}

export class HomeAction {
    static setTodos(todos: Todo[]) {
        return {
            type: IHomeStateConstants.SET_TODO,
            value: todos,
        };
    }
}
