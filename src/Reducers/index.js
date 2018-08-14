import {combineReducers} from 'redux';

import Api from './Api';
import Loaders from './Loaders';
import Products from './Products';
import Language from './Language';

export default combineReducers({
    Api,
    Loaders,
    Products,
    Language,
});