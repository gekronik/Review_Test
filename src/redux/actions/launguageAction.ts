

export enum ActionTypes {
    SET_LANGUAGE = 'SET_LANGUAGE',
}

interface SetLanguageAction {
    type: ActionTypes.SET_LANGUAGE;
    payload: string;
}

export type Action =  SetLanguageAction;

export const setLanguage = (language: string): SetLanguageAction => {
    return {
        type: ActionTypes.SET_LANGUAGE,
        payload: language,
    };
};
