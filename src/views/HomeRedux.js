/**
 * Created by hldev on 17-2-13.
 */

import {combineReducers} from 'redux';
import list from '../components/Home/PreviewListRedux';

export default combineReducers({
    list,
});

export * as listAction from '../components/Home/PreviewListRedux';




