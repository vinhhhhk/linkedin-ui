import {createStore} from 'redux'
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhencers= composeWithDevTools();
const store= createStore(rootReducer, composeEnhencers);
export default  store;

