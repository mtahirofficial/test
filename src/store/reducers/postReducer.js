// import { savePost } from "../actions/Actions";
import actiontypes from "../constants/Constants";

const states = [

]

export default (state = states, action) => {
    switch (action.type) {
        case actiontypes.savePost:
            return([...state, action.payload])
        default:
            return state
    }
}