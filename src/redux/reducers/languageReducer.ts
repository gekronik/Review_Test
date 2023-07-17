import {Action, ActionTypes} from "../actions/launguageAction";


interface AppState {
    language: string;
}

const initialState: AppState = {
    language: 'ru',
};

const languageReducer = (state = initialState.language, action: Action): string => {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};
export default languageReducer;
