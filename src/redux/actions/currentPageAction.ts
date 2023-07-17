export enum ActionTypes {
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

interface SetCurrentPageAction {
    type: ActionTypes.SET_CURRENT_PAGE;
    payload: number;
}

export type Action = SetCurrentPageAction


export const setCurrentPage = (page: number): SetCurrentPageAction => {
    return {
        type: ActionTypes.SET_CURRENT_PAGE,
        payload: page,
    };
};
