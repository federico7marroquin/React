import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Comments} from './comments'
import {Dishes} from './dishes'
import {Leaders} from './leaders'
import {Promotions} from './promotions'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const Configurestore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
