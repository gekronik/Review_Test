import {Action, ActionTypes} from "../actions/currentPageAction";

interface AppState {
    currentPage: number;
}

const initialState: AppState = {
    currentPage: 1,
};


const currentPageReducer = (state = initialState.currentPage, action: Action): number => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_PAGE:
            return action.payload;
        default:
            return state;
    }
};



export default currentPageReducer;
