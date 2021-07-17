export default function UserReducer(state = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, ...action.payload }

        case "LOGOUT":
            return {}

        default:
            return state;
    }
}