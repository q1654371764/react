import {createStore,combineReducers} from 'redux';
import table from './table/table.reducer'
const reducer = combineReducers({
    table
})

const store = createStore(reducer)  //{table:{navdata}}

export default store;