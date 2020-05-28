import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import {Comments} from './comments'
import {Dishes} from './dishes'
import {Leaders} from './leaders'
import {Promotions} from './promotions'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';


export const Configurestore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
