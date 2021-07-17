export default function ToDoReducer(state = [], action) {

    switch (action.type) {
        case "ADD_TODO":
            // console.log(action.payload)
            return [...state, action.payload];

        case "EDIT_TODO":
            const { editToDo, editIndex } = action.payload
            //{t, d,d,c, t}+{t,d,d}={...t,d,d,c, ...t2,d2,d2} ={t2,d2,d2, c} 
            //[1,2,3,4,5] a[3]
            return [...state.slice(0, editIndex), { ...state[editIndex], ...editToDo }, ...state.slice(editIndex + 1)];

        case "REMOVE_TODO":
            //console.log(action.payload)
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

        default:
            return state;
    }
}
