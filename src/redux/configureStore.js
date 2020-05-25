import {createStore, combineReducers} from 'redux';
import {Comments} from './comments'
import {Dishes} from './dishes'
import {Leaders} from './leaders'
import {Promotions} from './promotions'


export const Configurestore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );

    return store;
}
