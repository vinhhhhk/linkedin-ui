import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {authReducer} from './reducer'

const composeEnhencers= composeWithDevTools();
const store= createStore(rootReducer, applyMiddleware(thunk));
export default  store;

