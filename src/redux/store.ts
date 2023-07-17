import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reviewsReducer from './reducers/reviewsReducer';
import currentPageReducer from "./reducers/currentPageReducer.ts";
import languageReducer from "./reducers/languageReducer";

const rootReducer = combineReducers({
    reviews: reviewsReducer,
    currentPage: currentPageReducer,
    language: languageReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);



export default store;
