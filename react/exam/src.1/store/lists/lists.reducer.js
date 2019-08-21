const lists = (state=[],action)=>{
    let newstate = [...state];
    switch(action.type){
        case 'ADD_COMMIT':
            let {value} = action;
            newstate.push({
                value
            })
            return newstate;
        case 'DEL_COMMIT':
            let {key} = action;
            newstate.splice(key,1);
            return newstate;
        default:
            return state;
    }
}

export default lists;