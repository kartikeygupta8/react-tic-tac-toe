import { combineReducers } from 'redux';
import reducer from '../reducer';


    const rootReducer = combineReducers({

        winner: reducer,
        index: reducer
    });

    export default rootReducer;