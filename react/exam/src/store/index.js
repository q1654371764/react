import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import exam from './exam/exam.reducer'

const store = createStore(
    combineReducers({
        exam
    }),
    applyMiddleware(thunk)
)
window.store = store;
export default store;
