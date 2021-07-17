import { combineReducers } from "redux"
import ToDoReducer from './ToDoReducer'
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    todoItems: ToDoReducer,
    userDetails: UserReducer
});
export default rootReducer;