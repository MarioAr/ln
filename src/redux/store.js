import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { recetasReducer } from './reducers';

const reducers = combineReducers({
    recetasReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store; 