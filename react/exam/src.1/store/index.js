import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import shopcar from './shopcar/shopcar.reducer'
import lists from './lists/lists.reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//处理仓库状态
//柯里化
// function combine(options){
//     let {num,lists} = options;
//     return (state={num:0,lists:[]},action)=>{ //reducer
//         // console.log(state,action);
//         return {
//             num:num(state.num,action),
//             lists:lists(state.lists,action)
//         }
//     }
// }
const reducer = combineReducers({
    shopcar,
    lists
})

//创建仓库
const store = createStore(reducer,applyMiddleware(logger,thunk));
// let dispatch = store.dispatch;
// store.dispatch = (action)=>{  //假
//     if(typeof action === 'function'){
//         //执行异步
//         action(dispatch);
//     }else{
//         dispatch(action); //真
//     }
// }

export default store;

