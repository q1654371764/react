import navdata from '../../table/mock/nav';
import contentdata from '../../table/mock/cont'
const defaultstate = {
    navdata,
    contentdata,
    resData:{}  //筛选完之后的数据
}
const table = (state = defaultstate,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'CHANGE_CONTENT':
            let {id} = action;
            newState.resData = newState.contentdata.find(item=>item.id===id);
            return newState;
        default :
            return state;
    }
}

export default table;