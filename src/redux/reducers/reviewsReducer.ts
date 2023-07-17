import { Action, ActionTypes, Review } from '../actions/reviewsAction';

interface AppState {
    reviews: {
        ru: Review[];
        en: Review[];
    };
}

const initialState: AppState = {
    reviews: {
        ru: [],
        en: [],
    },
};

function languageData (data) {
    return Object.keys(data).map((key) => {
        const reviewData = data[key];
        return {
            id: key,
            name: reviewData.name,
            review: reviewData.review,
            date: reviewData.date,
        };
    });
}

const reviewsReducer = (state = initialState.reviews, action: Action): { ru: Review[]; en: Review[] } => {
    switch (action.type) {
        case ActionTypes.SET_REVIEWS:
            return {
                ru: languageData(action.payload.ru),
                en: languageData(action.payload.en)
            };
        default:
            return state;
    }
};


export default reviewsReducer;
