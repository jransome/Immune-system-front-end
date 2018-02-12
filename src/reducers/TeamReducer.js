import { GET_TEAMS } from "../actions/TeamActions";

export default function (state = [], action) {
    switch(action.type) {
        case GET_TEAMS:
        console.log(action.payload)
        return action.payload;
        default:
            return state;
    }
}