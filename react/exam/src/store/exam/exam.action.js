import axios from 'axios';
import './mock/index'
import {INIT_DATA,SUBMIT_ID,CHANGE_ITEM} from './exam.actionType'
export const getdata = (url)=>{
    return dispatch=>{
        axios.get(url).then(res=>{
            dispatch({
                type:INIT_DATA,
                allDate:res.data.data
            })
        })
    }
}

export const submit = (id,index)=>{
    // console.log(id);
    return {
        type:SUBMIT_ID,
        id,
        index
    }
}

export const changeItem = (index)=>{
    return {
        type:CHANGE_ITEM,
        index
    }
}