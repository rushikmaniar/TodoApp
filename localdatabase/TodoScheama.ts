export const TodoSchema = {
    name: "Todo",
    properties: {
        _id: "int",
        title: "string",
        is_complete: "boolean?",
    },
    primaryKey: "_id",
};