import {
    INIT_DATA,
    SUBMIT_ID,
    CHANGE_ITEM
} from './exam.actionType'
const defaultstate = {
    index:0, //当前题目下标
    curData:{
        // selected:null
    },  //当前题目
    allDate:[] //所有题目
} 
const format = (arr)=>{
    let tit = ['A','B','C','D'];
    let ind = [];
    let random =(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
    return arr.map((item,key)=>{ 
        let n = random(0,3);
        while(ind.includes(n)){
            n = random(0,3);
        }
        ind.push(n);
        return [
            tit[key],arr[n]
        ]
    })
}
const reducer = (state = defaultstate ,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case INIT_DATA:
            {
                let {allDate} = action;
                let {index} = newState;
                allDate.forEach(item=>{ //变成随机
                    item.options = format(item.options)
                })
                newState.allDate = allDate;
                newState.curData = {...newState.allDate[index],selected:newState.curData.selected};
            }
            return newState;
        case SUBMIT_ID:
            {
                let {id,index} = action; //提交得答题答案
                //index 下一题得下标
                // console.log(index);
                let {allDate} = newState;
                allDate[index].selected = id; //记录已经选择过得答案
                index++; //下标变化
                if(index >= allDate.length){ //最后一题
                    index = allDate.length-1;
                }
                newState.curData = allDate[index];
                newState.index = index;
            }
            return newState;
        case CHANGE_ITEM:
            {
                let {index} = action;
                let {allDate} = newState;
                newState.curData = allDate[index]; 
                newState.index = index;
            }
            return newState
        default:
            return state;
    }   
}

export default reducer;