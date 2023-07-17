import { Dispatch } from 'redux';

export enum ActionTypes {
    SET_REVIEWS = 'SET_REVIEWS',

}

export interface Review {
    id: string;
    name: string;
    review: string;
    date: string;

}

export interface SetReviewsAction {
    type: ActionTypes.SET_REVIEWS;
    payload: Review[];
}

export type Action = SetReviewsAction


export const fetchReviews = () => {
    return async (dispatch: Dispatch<Action>) => {

        try {
            const response = await fetch('/server/data.json');
            const data: Review[] = await response.json();
            setTimeout(() => {
                dispatch(setReviews(data));
            }, 800)
        } catch (error) {
            console.log('Ошибка при загрузке отзывов:', error);
        }
    };
};

export const setReviews = (reviews: Review[]): SetReviewsAction => {
    return {
        type: ActionTypes.SET_REVIEWS,
        payload: reviews,
    };
};
