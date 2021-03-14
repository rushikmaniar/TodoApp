import {TodoSchema} from "./TodoScheama";
import Realm from "realm";

class AppSchema {
    static appRealm = () => Realm.open({
        path: "appRealm",
        schema: [TodoSchema],
    });
}